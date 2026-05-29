package kz.market.app.service;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AdminGuard {
    public void requireAdmin(String role) {
        if (!"ADMIN".equalsIgnoreCase(role == null ? "" : role.trim())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Admin account is required");
        }
    }
}
