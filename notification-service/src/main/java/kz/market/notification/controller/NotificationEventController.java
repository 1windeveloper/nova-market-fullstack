package kz.market.notification.controller;

import java.util.List;
import kz.market.notification.entity.NotificationEvent;
import kz.market.notification.repository.NotificationEventRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notifications")
public class NotificationEventController {
    private final NotificationEventRepository repository;

    public NotificationEventController(NotificationEventRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<NotificationEvent> findRecent() {
        return repository.findTop50ByOrderByReceivedAtDesc();
    }
}
