package kz.market.app.service;

import java.util.Comparator;
import java.util.List;
import kz.market.app.dto.ProductDtos.CategoryResponse;
import kz.market.app.dto.ProductDtos.PhotoResponse;
import kz.market.app.dto.ProductDtos.ProductRequest;
import kz.market.app.dto.ProductDtos.ProductResponse;
import kz.market.app.entity.Category;
import kz.market.app.entity.Product;
import kz.market.app.entity.ProductPhoto;
import kz.market.app.repository.CategoryRepository;
import kz.market.app.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Transactional(readOnly = true)
    public List<ProductResponse> findAll() {
        return productRepository.findAll().stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public ProductResponse findById(Long id) {
        return productRepository.findById(id).map(this::toResponse)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
    }

    @Transactional
    public ProductResponse create(ProductRequest request) {
        Category category = categoryRepository.findById(request.categoryId())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Category not found"));
        Product product = new Product();
        apply(product, request, category);
        return toResponse(productRepository.save(product));
    }

    @Transactional
    public ProductResponse update(Long id, ProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        Category category = categoryRepository.findById(request.categoryId())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Category not found"));
        product.getPhotos().clear();
        apply(product, request, category);
        return toResponse(product);
    }

    @Transactional
    public void delete(Long id) {
        productRepository.deleteById(id);
    }

    private void apply(Product product, ProductRequest request, Category category) {
        product.setName(request.name());
        product.setDescription(request.description());
        product.setPrice(request.price());
        product.setStock(request.stock());
        product.setBadge(normalizeBadge(request.badge()));
        product.setCategory(category);
        if (request.photos() != null) {
            request.photos().forEach(photoRequest -> {
                ProductPhoto photo = new ProductPhoto();
                photo.setFileId(photoRequest.fileId());
                photo.setUrl(photoRequest.url());
                photo.setSortOrder(photoRequest.sortOrder() == null ? 0 : photoRequest.sortOrder());
                photo.setProduct(product);
                product.getPhotos().add(photo);
            });
        }
    }

    private ProductResponse toResponse(Product product) {
        List<PhotoResponse> photos = product.getPhotos().stream()
            .sorted(Comparator.comparing(ProductPhoto::getSortOrder))
            .map(photo -> new PhotoResponse(photo.getId(), photo.getFileId(), photo.getUrl(), photo.getSortOrder()))
            .toList();
        Category category = product.getCategory();
        return new ProductResponse(
            product.getId(),
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getStock(),
            product.getBadge(),
            product.getActive(),
            new CategoryResponse(category.getId(), category.getSlug(), category.getName()),
            photos
        );
    }

    private String normalizeBadge(String badge) {
        if (badge == null || badge.isBlank()) {
            return "new";
        }
        String normalized = badge.trim().toLowerCase();
        return switch (normalized) {
            case "new", "sale", "popular", "top", "hot" -> normalized;
            default -> "new";
        };
    }
}
