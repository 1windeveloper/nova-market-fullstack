package kz.market.app.service;

import kz.market.app.dto.AdminDtos.AdminStatsResponse;
import kz.market.app.repository.CategoryRepository;
import kz.market.app.repository.OrderRepository;
import kz.market.app.repository.ProductRepository;
import kz.market.app.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdminService {
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final OrderRepository orderRepository;

    public AdminService(
        UserRepository userRepository,
        ProductRepository productRepository,
        CategoryRepository categoryRepository,
        OrderRepository orderRepository
    ) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.orderRepository = orderRepository;
    }

    @Transactional(readOnly = true)
    public AdminStatsResponse stats() {
        long stock = productRepository.findAll().stream()
            .mapToLong(product -> product.getStock() == null ? 0 : product.getStock())
            .sum();
        return new AdminStatsResponse(
            userRepository.count(),
            productRepository.count(),
            categoryRepository.count(),
            orderRepository.count(),
            stock
        );
    }
}
