package kz.market.app.service;

import java.time.Instant;
import kz.market.app.config.NotificationRabbitProperties;
import kz.market.app.dto.NotificationEvent;
import kz.market.app.entity.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.stereotype.Service;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

@Service
public class NotificationPublisher {
    private static final Logger log = LoggerFactory.getLogger(NotificationPublisher.class);
    private final ObjectProvider<RabbitTemplate> rabbitTemplateProvider;
    private final NotificationRabbitProperties properties;

    public NotificationPublisher(ObjectProvider<RabbitTemplate> rabbitTemplateProvider, NotificationRabbitProperties properties) {
        this.rabbitTemplateProvider = rabbitTemplateProvider;
        this.properties = properties;
    }

    public record OrderChangedEvent(Order order, String action) {
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void publish(OrderChangedEvent event) {
        Order order = event.order();
        NotificationEvent notification = new NotificationEvent(
            order.getUser().getId(),
            order.getId(),
            order.getStatus().name(),
            event.action(),
            order.getTotal(),
            Instant.now()
        );
        try {
            RabbitTemplate rabbitTemplate = rabbitTemplateProvider.getIfAvailable();
            if (rabbitTemplate == null) {
                log.warn("RabbitTemplate is not available, notification event skipped action={} orderId={}", event.action(), order.getId());
                return;
            }
            rabbitTemplate.convertAndSend(properties.exchange(), properties.routingKey(), notification);
            log.info("Published notification event action={} orderId={}", event.action(), order.getId());
        } catch (RuntimeException ex) {
            log.error("Could not publish notification event action={} orderId={}", event.action(), order.getId(), ex);
        }
    }
}
