package kz.market.app.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public record AppProperties(String fileServiceUrl, Cors cors) {
    public record Cors(String allowedOrigins) {
    }
}
