package kz.market.file.service.service;

import io.minio.GetObjectArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import java.io.InputStream;
import java.util.List;
import java.util.UUID;
import kz.market.file.service.config.MinioProperties;
import kz.market.file.service.dto.FileResponse;
import kz.market.file.service.entity.StoredFile;
import kz.market.file.service.repository.StoredFileRepository;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FileStorageService {
    private final MinioClient minioClient;
    private final MinioProperties minioProperties;
    private final StoredFileRepository storedFileRepository;

    public FileStorageService(MinioClient minioClient, MinioProperties minioProperties, StoredFileRepository storedFileRepository) {
        this.minioClient = minioClient;
        this.minioProperties = minioProperties;
        this.storedFileRepository = storedFileRepository;
    }

    @Transactional
    public FileResponse upload(MultipartFile file) {
        if (file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File is empty");
        }

        String id = UUID.randomUUID().toString();
        String objectKey = id + "-" + cleanName(file.getOriginalFilename());
        String contentType = file.getContentType() == null ? "application/octet-stream" : file.getContentType();

        try (InputStream inputStream = file.getInputStream()) {
            minioClient.putObject(PutObjectArgs.builder()
                .bucket(minioProperties.bucket())
                .object(objectKey)
                .contentType(contentType)
                .stream(inputStream, file.getSize(), -1)
                .build());
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not upload file", exception);
        }

        StoredFile storedFile = new StoredFile();
        storedFile.setId(id);
        storedFile.setBucket(minioProperties.bucket());
        storedFile.setObjectKey(objectKey);
        storedFile.setOriginalFileName(file.getOriginalFilename() == null ? objectKey : file.getOriginalFilename());
        storedFile.setContentType(contentType);
        storedFile.setSize(file.getSize());
        storedFile.setUrl(minioProperties.publicUrl() + "/" + id + "/download");

        return toResponse(storedFileRepository.save(storedFile));
    }

    @Transactional(readOnly = true)
    public List<FileResponse> findAll() {
        return storedFileRepository.findAll().stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public FileResponse findById(String id) {
        return toResponse(findStoredFile(id));
    }

    @Transactional(readOnly = true)
    public DownloadedFile download(String id) {
        StoredFile storedFile = findStoredFile(id);
        try {
            InputStream stream = minioClient.getObject(GetObjectArgs.builder()
                .bucket(storedFile.getBucket())
                .object(storedFile.getObjectKey())
                .build());
            return new DownloadedFile(
                new InputStreamResource(stream),
                storedFile.getOriginalFileName(),
                storedFile.getContentType()
            );
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Could not download file", exception);
        }
    }

    private StoredFile findStoredFile(String id) {
        return storedFileRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "File not found"));
    }

    private FileResponse toResponse(StoredFile storedFile) {
        return new FileResponse(
            storedFile.getId(),
            storedFile.getOriginalFileName(),
            storedFile.getContentType(),
            storedFile.getSize(),
            storedFile.getUrl(),
            storedFile.getCreatedAt()
        );
    }

    private String cleanName(String name) {
        String source = name == null || name.isBlank() ? "file" : name;
        return source.replaceAll("[^a-zA-Z0-9._-]", "-");
    }

    public record DownloadedFile(InputStreamResource resource, String fileName, String contentType) {
    }
}
