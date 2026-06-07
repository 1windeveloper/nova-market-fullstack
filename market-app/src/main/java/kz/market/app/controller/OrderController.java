package kz.market.app.controller;

import jakarta.validation.Valid;
import java.util.List;
import kz.market.app.dto.OrderDtos.OrderRequest;
import kz.market.app.dto.OrderDtos.OrderResponse;
import kz.market.app.dto.OrderDtos.OrderStatusRequest;
import kz.market.app.dto.PaymentDtos.PaymentResponse;
import kz.market.app.service.OrderService;
import kz.market.app.service.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    private final OrderService orderService;
    private final PaymentService paymentService;

    public OrderController(OrderService orderService, PaymentService paymentService) {
        this.orderService = orderService;
        this.paymentService = paymentService;
    }

    @GetMapping("/api/users/{userId}/orders")
    public List<OrderResponse> findUserOrders(@PathVariable Long userId) {
        return orderService.findByUser(userId);
    }

    @PostMapping("/api/orders")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse create(@Valid @RequestBody OrderRequest request) {
        return orderService.create(request);
    }

    @PatchMapping("/api/orders/{orderId}")
    public OrderResponse updateStatus(@PathVariable Long orderId, @Valid @RequestBody OrderStatusRequest request) {
        return orderService.updateStatus(orderId, request.status());
    }

    @DeleteMapping("/api/orders/{orderId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long orderId) {
        orderService.delete(orderId);
    }

    @PostMapping("/api/orders/{orderId}/payments")
    @ResponseStatus(HttpStatus.CREATED)
    public PaymentResponse pay(@PathVariable Long orderId) {
        return paymentService.pay(orderId);
    }
}
