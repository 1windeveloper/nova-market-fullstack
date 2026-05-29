package kz.market.file.service.dto;

import java.time.Instant;

public record FileResponse(
    String id,
    String originalFileName,
    String contentType,
    Long size,
    String url,
    Instant createdAt
) {
}
