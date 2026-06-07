package kz.market.app.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.JacksonJsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(NotificationRabbitProperties.class)
public class RabbitConfig {
    @Bean
    DirectExchange notificationExchange(NotificationRabbitProperties properties) {
        return new DirectExchange(properties.exchange(), true, false);
    }

    @Bean
    Queue notificationQueue(NotificationRabbitProperties properties) {
        return new Queue(properties.queue(), true);
    }

    @Bean
    Binding notificationBinding(Queue notificationQueue, DirectExchange notificationExchange, NotificationRabbitProperties properties) {
        return BindingBuilder.bind(notificationQueue).to(notificationExchange).with(properties.routingKey());
    }

    @Bean
    MessageConverter jacksonMessageConverter() {
        return new JacksonJsonMessageConverter();
    }
}
