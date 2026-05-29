package kz.market.app.dto;

public final class AdminDtos {
    private AdminDtos() {
    }

    public record AdminStatsResponse(
        long users,
        long products,
        long categories,
        long orders,
        long stock
    ) {
    }
}
