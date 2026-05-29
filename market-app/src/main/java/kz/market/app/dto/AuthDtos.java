package kz.market.app.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public final class AuthDtos {
    private AuthDtos() {
    }

    public record RegisterRequest(
        @Email @NotBlank String email,
        @NotBlank @Size(min = 6) String password,
        @NotBlank String fullName
    ) {
    }

    public record LoginRequest(@Email @NotBlank String email, @NotBlank String password) {
    }

    public record UserResponse(Long id, String email, String fullName, String role) {
    }
}
