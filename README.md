# NOVA Market Fullstack

Practice marketplace project with:

- `frontend` - static NOVA Market frontend
- `market-app` - Java 21 Spring Boot backend with products, categories, auth and admin API
- `market-file-service` - Java 21 Spring Boot file service with MinIO/S3 storage

## Run

Start PostgreSQL and MinIO:

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

Start frontend:

```bash
cd frontend
python3 -m http.server 5500
```

Open:

- Frontend: http://127.0.0.1:5500
- Admin panel: http://127.0.0.1:5500/#manage
- MinIO console: http://localhost:9001

Admin account:

```text
admin@nova.kz
admin123
```
