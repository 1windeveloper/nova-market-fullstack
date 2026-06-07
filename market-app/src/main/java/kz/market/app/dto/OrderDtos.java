package kz.market.app.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public final class OrderDtos {
    private OrderDtos() {
    }

    public record OrderItemRequest(@NotNull Long productId, @NotNull @Min(1) Integer quantity) {
    }

    public record OrderRequest(@NotNull Long userId, @Valid @NotEmpty List<OrderItemRequest> items) {
    }

    public record OrderStatusRequest(@NotNull String status) {
    }

    public record OrderItemResponse(Long productId, String productName, Integer quantity, BigDecimal price) implements Serializable {
    }

    public record OrderResponse(
        Long id,
        Long userId,
        String status,
        BigDecimal total,
        Instant createdAt,
        List<OrderItemResponse> items
    ) implements Serializable {
    }
}
