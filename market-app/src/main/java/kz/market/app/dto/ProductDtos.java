package kz.market.app.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

public final class ProductDtos {
    private ProductDtos() {
    }

    public record CategoryResponse(Long id, String slug, String name) {
    }

    public record PhotoRequest(String fileId, String url, Integer sortOrder) {
    }

    public record PhotoResponse(Long id, String fileId, String url, Integer sortOrder) {
    }

    public record ProductRequest(
        @NotBlank String name,
        @NotBlank String description,
        @NotNull @DecimalMin("0.01") BigDecimal price,
        @NotNull @Min(0) Integer stock,
        String badge,
        @NotNull Long categoryId,
        List<PhotoRequest> photos
    ) {
    }

    public record ProductResponse(
        Long id,
        String name,
        String description,
        BigDecimal price,
        Integer stock,
        String badge,
        Boolean active,
        CategoryResponse category,
        List<PhotoResponse> photos
    ) {
    }
}
