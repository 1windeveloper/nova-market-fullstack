# market-app

Main marketplace backend on Java 21 and Spring Boot.

## What is inside

- registration and login by email/password: `POST /api/auth/register`, `POST /api/auth/login`
- product catalog: `GET/POST/PUT/DELETE /api/products`
- categories: `GET /api/categories`
- orders: `POST /api/orders`, `PATCH /api/orders/{orderId}`, `DELETE /api/orders/{orderId}`
- cached user orders: `GET /api/users/{userId}/orders`
- payment transaction: `POST /api/orders/{orderId}/payments`
- Redis cache for user orders, cleared after order create/update/delete/payment
- RabbitMQ notification events after order create/update/delete
- PostgreSQL database exposed on port `55432` because local `5432` is already used on this Mac
- product photos stored as `fileId` and `url`, so they can point to `market-file-service`

## Run

Start infrastructure:

```bash
cd /Users/armatislambekov/Desktop/market-app
docker compose up -d
```

Start app:

```bash
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

API: `http://localhost:8080`

RabbitMQ management UI: `http://localhost:15672`, login `guest`, password `guest`.
