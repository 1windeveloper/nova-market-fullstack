package kz.market.notification.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.Instant;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "notification_events")
public class NotificationEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long orderId;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String action;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal total;

    @Column(nullable = false)
    private Instant occurredAt;

    @Column(nullable = false)
    private Instant receivedAt;

    @PrePersist
    void prePersist() {
        receivedAt = Instant.now();
    }
}

