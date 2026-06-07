package kz.market.notification.dto;

import java.math.BigDecimal;
import java.time.Instant;

public record NotificationEventMessage(
    Long userId,
    Long orderId,
    String status,
    String action,
    BigDecimal total,
    Instant occurredAt
) {
}

