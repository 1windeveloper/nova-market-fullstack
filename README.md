# NOVA Market Fullstack

Practice marketplace project with:

- `frontend` - static NOVA Market frontend
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

Start frontend:

```bash
cd frontend
python3 -m http.server 5500
```

Open:

- Frontend: http://localhost:5500/index.html
- Admin panel: http://localhost:5500/index.html#manage
- Market API: http://localhost:8080/api/categories
- User orders cache endpoint: http://localhost:8080/api/users/5/orders
- File API: http://localhost:8081/api/files
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
- Redis cache for `GET /api/users/{userId}/orders`.
- Cache eviction after order create/update/delete and payment.
- Payment entity linked to order.
- `POST /api/orders/{orderId}/payments` is transactional.
- Double payment is blocked with locking and a unique constraint.
