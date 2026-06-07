package kz.market.app.service;

import java.math.BigDecimal;
import java.util.List;
import kz.market.app.dto.OrderDtos.OrderItemRequest;
import kz.market.app.dto.OrderDtos.OrderItemResponse;
import kz.market.app.dto.OrderDtos.OrderRequest;
import kz.market.app.dto.OrderDtos.OrderResponse;
import kz.market.app.entity.AppUser;
import kz.market.app.entity.Order;
import kz.market.app.entity.OrderItem;
import kz.market.app.entity.OrderStatus;
import kz.market.app.entity.Product;
import kz.market.app.repository.OrderRepository;
import kz.market.app.repository.ProductRepository;
import kz.market.app.repository.UserRepository;
import kz.market.app.service.NotificationPublisher.OrderChangedEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class OrderService {
    private static final Logger log = LoggerFactory.getLogger(OrderService.class);
    private static final String USER_ORDERS_CACHE = "userOrders";

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final CacheManager cacheManager;
    private final ApplicationEventPublisher eventPublisher;

    public OrderService(
        OrderRepository orderRepository,
        ProductRepository productRepository,
        UserRepository userRepository,
        CacheManager cacheManager,
        ApplicationEventPublisher eventPublisher
    ) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.cacheManager = cacheManager;
        this.eventPublisher = eventPublisher;
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> findByUser(Long userId) {
        Cache cache = cacheManager.getCache(USER_ORDERS_CACHE);
        if (cache != null) {
            List<OrderResponse> cached = cache.get(userId, List.class);
            if (cached != null) {
                log.info("Orders for user {} loaded from CACHE", userId);
                return cached;
            }
        }
        log.info("Orders for user {} loaded from DATABASE", userId);
        List<OrderResponse> orders = orderRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
            .map(this::toResponse)
            .toList();
        if (cache != null) {
            cache.put(userId, orders);
        }
        return orders;
    }

    @Transactional
    public OrderResponse create(OrderRequest request) {
        AppUser user = userRepository.findById(request.userId())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found"));
        Order order = new Order();
        order.setUser(user);
        applyItems(order, request.items());
        Order saved = orderRepository.save(order);
        evictUserOrders(user.getId());
        eventPublisher.publishEvent(new OrderChangedEvent(saved, "CREATED"));
        return toResponse(saved);
    }

    @Transactional
    public OrderResponse updateStatus(Long orderId, String status) {
        Order order = findOrder(orderId);
        order.setStatus(parseStatus(status));
        evictUserOrders(order.getUser().getId());
        eventPublisher.publishEvent(new OrderChangedEvent(order, "UPDATED"));
        return toResponse(order);
    }

    @Transactional
    public void delete(Long orderId) {
        Order order = findOrder(orderId);
        Long userId = order.getUser().getId();
        eventPublisher.publishEvent(new OrderChangedEvent(order, "DELETED"));
        orderRepository.delete(order);
        evictUserOrders(userId);
    }

    private void applyItems(Order order, List<OrderItemRequest> requests) {
        order.getItems().clear();
        BigDecimal total = BigDecimal.ZERO;
        for (OrderItemRequest request : requests) {
            Product product = productRepository.findById(request.productId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product not found"));
            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setProduct(product);
            item.setQuantity(request.quantity());
            item.setPrice(product.getPrice());
            order.getItems().add(item);
            total = total.add(product.getPrice().multiply(BigDecimal.valueOf(request.quantity())));
        }
        order.setTotal(total);
    }

    private void evictUserOrders(Long userId) {
        Cache cache = cacheManager.getCache(USER_ORDERS_CACHE);
        if (cache != null) {
            cache.evict(userId);
            log.info("Orders cache evicted for user {}", userId);
        }
    }

    private Order findOrder(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found"));
    }

    private OrderStatus parseStatus(String status) {
        try {
            return OrderStatus.valueOf(status.trim().toUpperCase());
        } catch (RuntimeException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unknown order status");
        }
    }

    private OrderResponse toResponse(Order order) {
        List<OrderItemResponse> items = order.getItems().stream()
            .map(item -> new OrderItemResponse(
                item.getProduct().getId(),
                item.getProduct().getName(),
                item.getQuantity(),
                item.getPrice()
            ))
            .toList();
        return new OrderResponse(
            order.getId(),
            order.getUser().getId(),
            order.getStatus().name(),
            order.getTotal(),
            order.getCreatedAt(),
            items
        );
    }
}
