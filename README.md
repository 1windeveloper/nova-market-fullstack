# NOVA Market Fullstack

Practice marketplace project with:

- `frontend` - static NOVA Market frontend
- `api-gateway` - Spring Cloud Gateway entry point and route layer for all APIs
- `market-app` - Java 21 Spring Boot backend with products, categories, auth, orders, Redis cache, RabbitMQ events and payment transaction
- `market-file-service` - Java 21 Spring Boot file service with MinIO/S3 storage
- `notification-service` - Java 21 Spring Boot service that consumes RabbitMQ order events and stores them in `notification_events`

## Run

Start PostgreSQL, MinIO, Redis and RabbitMQ:

```bash
cd market-app
docker compose up -d
```

Start backend:

```bash
cd market-app
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

Start file service:

```bash
cd market-file-service
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

Start notification service:

```bash
cd notification-service
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

Start API gateway:

```bash
cd api-gateway
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

Start frontend:

```bash
cd frontend
python3 -m http.server 5500
```

Open:

- Frontend: http://localhost:5500/index.html
- Admin panel: http://localhost:5500/index.html#manage
- API Gateway: http://localhost:8085
- Market API through gateway: http://localhost:8085/api/categories
- User orders cache endpoint through gateway: http://localhost:8085/api/users/5/orders
- File API through gateway: http://localhost:8085/api/files
- Notification events through gateway: http://localhost:8085/api/notifications
- RabbitMQ: http://localhost:15672 (`guest` / `guest`)
- MinIO console: http://localhost:9001

Admin account:

```text
admin@nova.kz
admin123
```

Customer account:

```text
qwerty@gmail.com
qwerty
```

## Practice Requirements Covered

- Notification events after order create/update/delete through RabbitMQ.
- `notification-service` saves events to `notification_events`.
- `api-gateway` routes frontend/API traffic to `market-app`, `market-file-service`, and `notification-service`.
- Redis cache for `GET /api/users/{userId}/orders`.
- Cache eviction after order create/update/delete and payment.
- Payment entity linked to order.
- `POST /api/orders/{orderId}/payments` is transactional.
- Double payment is blocked with locking and a unique constraint.
