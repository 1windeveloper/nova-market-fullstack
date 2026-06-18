# api-gateway

Spring Cloud Gateway entry point for NOVA Market services.

## Routes

- `GET/POST /api/auth/**` -> `market-app` on `8080`
- `GET/POST/PUT/DELETE /api/categories/**`, `/api/products/**`, `/api/admin/**` -> `market-app` on `8080`
- `GET/POST/PATCH/DELETE /api/orders/**`, `/api/users/**` -> `market-app` on `8080`
- `GET/POST /api/files/**` -> `market-file-service` on `8081`
- `GET /api/notifications/**` -> `notification-service` on `8082`

## Run

Start the downstream services first, then run:

```bash
cd api-gateway
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

Gateway URL: `http://localhost:8085`
