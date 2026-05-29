package kz.market.app.controller;

import jakarta.validation.Valid;
import java.util.List;
import kz.market.app.dto.ProductDtos.ProductRequest;
import kz.market.app.dto.ProductDtos.ProductResponse;
import kz.market.app.service.AdminGuard;
import kz.market.app.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    private final AdminGuard adminGuard;

    public ProductController(ProductService productService, AdminGuard adminGuard) {
        this.productService = productService;
        this.adminGuard = adminGuard;
    }

    @GetMapping
    public List<ProductResponse> findAll() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ProductResponse findById(@PathVariable Long id) {
        return productService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductResponse create(@RequestHeader(value = "X-User-Role", required = false) String role, @Valid @RequestBody ProductRequest request) {
        adminGuard.requireAdmin(role);
        return productService.create(request);
    }

    @PutMapping("/{id}")
    public ProductResponse update(@RequestHeader(value = "X-User-Role", required = false) String role, @PathVariable Long id, @Valid @RequestBody ProductRequest request) {
        adminGuard.requireAdmin(role);
        return productService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@RequestHeader(value = "X-User-Role", required = false) String role, @PathVariable Long id) {
        adminGuard.requireAdmin(role);
        productService.delete(id);
    }
}
