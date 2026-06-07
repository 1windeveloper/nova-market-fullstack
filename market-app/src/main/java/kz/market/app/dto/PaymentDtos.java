package kz.market.app.dto;

import java.math.BigDecimal;
import java.time.Instant;

public final class PaymentDtos {
    private PaymentDtos() {
    }

    public record PaymentResponse(Long id, Long orderId, BigDecimal amount, String status, Instant createdAt) {
    }
}
