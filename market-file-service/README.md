# market-file-service

File service on Java 21, Spring Boot and MinIO S3.

## Endpoints

- `POST /api/files` multipart field `file`
- `GET /api/files`
- `GET /api/files/{id}`
- `GET /api/files/{id}/download`

## Run

Start PostgreSQL on `55432` and MinIO from `market-app/docker-compose.yml`:

```bash
cd /Users/armatislambekov/Desktop/market-app
docker compose up -d
```

Start file service:

```bash
cd /Users/armatislambekov/Desktop/market-file-service
./mvnw spring-boot:run
```

API: `http://localhost:8081`
MinIO console: `http://localhost:9001`, login `minioadmin`, password `minioadmin`.
