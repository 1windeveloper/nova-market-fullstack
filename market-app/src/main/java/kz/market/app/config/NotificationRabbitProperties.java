package kz.market.app.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.notifications")
public record NotificationRabbitProperties(String exchange, String routingKey, String queue) {
}
