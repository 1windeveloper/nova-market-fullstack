package kz.market.notification.repository;

import java.util.List;
import kz.market.notification.entity.NotificationEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationEventRepository extends JpaRepository<NotificationEvent, Long> {
    List<NotificationEvent> findTop50ByOrderByReceivedAtDesc();
}
