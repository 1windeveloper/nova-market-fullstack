package kz.market.app.config;

import java.math.BigDecimal;
import java.util.List;
import kz.market.app.entity.Category;
import kz.market.app.entity.AppUser;
import kz.market.app.entity.Product;
import kz.market.app.entity.ProductPhoto;
import kz.market.app.entity.UserRole;
import kz.market.app.repository.CategoryRepository;
import kz.market.app.repository.ProductRepository;
import kz.market.app.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner seedData(
        CategoryRepository categoryRepository,
        ProductRepository productRepository,
        UserRepository userRepository,
        PasswordEncoder passwordEncoder
    ) {
        return args -> {
            if (!userRepository.existsByEmailIgnoreCase("admin@nova.kz")) {
                AppUser admin = new AppUser();
                admin.setEmail("admin@nova.kz");
                admin.setFullName("NOVA Admin");
                admin.setPasswordHash(passwordEncoder.encode("admin123"));
                admin.setRole(UserRole.ADMIN);
                userRepository.save(admin);
            }
            if (categoryRepository.count() == 0) {
                categoryRepository.saveAll(List.of(
                    category("electronics", "Electronics"),
                    category("fashion", "Fashion"),
                    category("home", "Home"),
                    category("beauty", "Beauty"),
                    category("sports", "Sports")
                ));
            }
            if (productRepository.count() == 0) {
                Category electronics = categoryRepository.findBySlug("electronics").orElseThrow();
                Category fashion = categoryRepository.findBySlug("fashion").orElseThrow();
                Product headphones = product("Sony WH-CH720N Wireless Headphones", "Wireless headphones with active noise cancelling.", "129.00", 24, electronics,
                    "popular", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80");
                Product shoes = product("Nike Air Zoom Running Shoes", "Responsive running shoes with breathable mesh.", "96.00", 31, fashion,
                    "top", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80");
                productRepository.saveAll(List.of(headphones, shoes));
            }
        };
    }

    private Category category(String slug, String name) {
        Category category = new Category();
        category.setSlug(slug);
        category.setName(name);
        return category;
    }

    private Product product(String name, String description, String price, int stock, Category category, String badge, String url) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(new BigDecimal(price));
        product.setStock(stock);
        product.setBadge(badge);
        product.setCategory(category);
        ProductPhoto photo = new ProductPhoto();
        photo.setFileId("seed-" + name.toLowerCase().replaceAll("[^a-z0-9]+", "-"));
        photo.setUrl(url);
        photo.setProduct(product);
        product.getPhotos().add(photo);
        return product;
    }
}
