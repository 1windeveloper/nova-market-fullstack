package kz.market.notification.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.JacksonJsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    @Bean
    DirectExchange notificationExchange(@Value("${app.notifications.exchange}") String exchange) {
        return new DirectExchange(exchange, true, false);
    }

    @Bean
    Queue notificationQueue(@Value("${app.notifications.queue}") String queue) {
        return new Queue(queue, true);
    }

    @Bean
    Binding notificationBinding(
        Queue notificationQueue,
        DirectExchange notificationExchange,
        @Value("${app.notifications.routing-key}") String routingKey
    ) {
        return BindingBuilder.bind(notificationQueue).to(notificationExchange).with(routingKey);
    }

    @Bean
    MessageConverter jacksonMessageConverter() {
        return new JacksonJsonMessageConverter();
    }
}
