package kz.market.app.controller;

import kz.market.app.dto.AdminDtos.AdminStatsResponse;
import kz.market.app.service.AdminGuard;
import kz.market.app.service.AdminService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;
    private final AdminGuard adminGuard;

    public AdminController(AdminService adminService, AdminGuard adminGuard) {
        this.adminService = adminService;
        this.adminGuard = adminGuard;
    }

    @GetMapping("/stats")
    public AdminStatsResponse stats(@RequestHeader(value = "X-User-Role", required = false) String role) {
        adminGuard.requireAdmin(role);
        return adminService.stats();
    }
}
