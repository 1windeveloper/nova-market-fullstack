package kz.market.app.repository;

import kz.market.app.entity.Payment;
import kz.market.app.entity.PaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    boolean existsByOrderIdAndStatus(Long orderId, PaymentStatus status);
}
