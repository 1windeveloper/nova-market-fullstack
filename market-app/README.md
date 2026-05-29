# market-app

Main marketplace backend on Java 21 and Spring Boot.

## What is inside

- registration and login by email/password: `POST /api/auth/register`, `POST /api/auth/login`
- product catalog: `GET/POST/PUT/DELETE /api/products`
- categories: `GET /api/categories`
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
./mvnw spring-boot:run
```

API: `http://localhost:8080`
