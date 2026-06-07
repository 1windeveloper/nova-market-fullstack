package kz.market.notification.service;

import kz.market.notification.dto.NotificationEventMessage;
import kz.market.notification.entity.NotificationEvent;
import kz.market.notification.repository.NotificationEventRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class NotificationEventListener {
    private static final Logger log = LoggerFactory.getLogger(NotificationEventListener.class);
    private final NotificationEventRepository repository;

    public NotificationEventListener(NotificationEventRepository repository) {
        this.repository = repository;
    }

    @RabbitListener(queues = "${app.notifications.queue}")
    public void handle(NotificationEventMessage message) {
        NotificationEvent event = new NotificationEvent();
        event.setUserId(message.userId());
        event.setOrderId(message.orderId());
        event.setStatus(message.status());
        event.setAction(message.action());
        event.setTotal(message.total());
        event.setOccurredAt(message.occurredAt());
        repository.save(event);
        log.info("Saved notification event action={} orderId={} userId={}", message.action(), message.orderId(), message.userId());
    }
}

