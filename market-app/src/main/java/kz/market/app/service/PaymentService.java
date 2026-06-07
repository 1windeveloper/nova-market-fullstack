package kz.market.app.service;

import kz.market.app.dto.PaymentDtos.PaymentResponse;
import kz.market.app.entity.Order;
import kz.market.app.entity.OrderStatus;
import kz.market.app.entity.Payment;
import kz.market.app.entity.PaymentStatus;
import kz.market.app.repository.OrderRepository;
import kz.market.app.repository.PaymentRepository;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PaymentService {
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;
    private final CacheManager cacheManager;

    public PaymentService(OrderRepository orderRepository, PaymentRepository paymentRepository, CacheManager cacheManager) {
        this.orderRepository = orderRepository;
        this.paymentRepository = paymentRepository;
        this.cacheManager = cacheManager;
    }

    @Transactional
    public PaymentResponse pay(Long orderId) {
        Order order = orderRepository.findByIdForUpdate(orderId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found"));
        if (paymentRepository.existsByOrderIdAndStatus(orderId, PaymentStatus.SUCCESS)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Order is already paid");
        }
        try {
            Payment payment = new Payment();
            payment.setOrder(order);
            payment.setAmount(order.getTotal());
            payment.setStatus(PaymentStatus.SUCCESS);
            Payment saved = paymentRepository.saveAndFlush(payment);
            order.setStatus(OrderStatus.PAID);
            evictUserOrders(order.getUser().getId());
            return new PaymentResponse(saved.getId(), order.getId(), saved.getAmount(), saved.getStatus().name(), saved.getCreatedAt());
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Order is already paid", ex);
        }
    }

    private void evictUserOrders(Long userId) {
        Cache cache = cacheManager.getCache("userOrders");
        if (cache != null) {
            cache.evict(userId);
        }
    }
}
