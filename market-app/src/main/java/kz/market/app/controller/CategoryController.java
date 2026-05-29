package kz.market.app.controller;

import java.util.List;
import kz.market.app.dto.ProductDtos.CategoryResponse;
import kz.market.app.repository.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public List<CategoryResponse> findAll() {
        return categoryRepository.findAll().stream()
            .map(category -> new CategoryResponse(category.getId(), category.getSlug(), category.getName()))
            .toList();
    }
}
