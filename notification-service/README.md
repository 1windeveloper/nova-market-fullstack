# notification-service

Consumes order events from RabbitMQ and saves them to `notification_events`.

## Event fields

- `userId`
- `orderId`
- `status`
- `action`
- `total`
- `occurredAt`

## Run

Start infrastructure from `market-app`:

```bash
cd /Users/armatislambekov/Desktop/market-app
docker compose up -d
```

Start service:

```bash
cd /Users/armatislambekov/Desktop/notification-service
JAVA_HOME=/Users/armatislambekov/Library/Java/JavaVirtualMachines/ms-21.0.11/Contents/Home mvn spring-boot:run
```

API/service port: `http://localhost:8082`
RabbitMQ management UI: `http://localhost:15672`, login `guest`, password `guest`.
