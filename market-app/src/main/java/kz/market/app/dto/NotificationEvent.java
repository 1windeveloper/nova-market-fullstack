package kz.market.app.dto;

import java.math.BigDecimal;
import java.time.Instant;

public record NotificationEvent(
    Long userId,
    Long orderId,
    String status,
    String action,
    BigDecimal total,
    Instant occurredAt
) {
}
