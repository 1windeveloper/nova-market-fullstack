package kz.market.gateway;

import static org.springframework.cloud.gateway.server.mvc.filter.BeforeFilterFunctions.uri;
import static org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions.route;
import static org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions.http;
import static org.springframework.web.servlet.function.RequestPredicates.path;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

@Configuration
public class GatewayRoutesConfig {
    @Bean
    RouterFunction<ServerResponse> marketAppRoutes(
        @Value("${nova.routes.market-app-url}") String marketAppUrl
    ) {
        return route("market-app")
            .route(path("/api/auth/**")
                .or(path("/api/categories/**"))
                .or(path("/api/products/**"))
                .or(path("/api/admin/**"))
                .or(path("/api/orders/**"))
                .or(path("/api/users/**")), http())
            .before(uri(marketAppUrl))
            .build();
    }

    @Bean
    RouterFunction<ServerResponse> marketFileServiceRoutes(
        @Value("${nova.routes.market-file-service-url}") String marketFileServiceUrl
    ) {
        return route("market-file-service")
            .route(path("/api/files/**"), http())
            .before(uri(marketFileServiceUrl))
            .build();
    }

    @Bean
    RouterFunction<ServerResponse> notificationServiceRoutes(
        @Value("${nova.routes.notification-service-url}") String notificationServiceUrl
    ) {
        return route("notification-service")
            .route(path("/api/notifications/**"), http())
            .before(uri(notificationServiceUrl))
            .build();
    }
}
