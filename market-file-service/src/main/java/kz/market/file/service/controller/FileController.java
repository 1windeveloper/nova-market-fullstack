package kz.market.file.service.controller;

import java.util.List;
import kz.market.file.service.dto.FileResponse;
import kz.market.file.service.service.FileStorageService;
import kz.market.file.service.service.FileStorageService.DownloadedFile;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
public class FileController {
    private final FileStorageService fileStorageService;

    public FileController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public FileResponse upload(@RequestParam("file") MultipartFile file) {
        return fileStorageService.upload(file);
    }

    @GetMapping
    public List<FileResponse> findAll() {
        return fileStorageService.findAll();
    }

    @GetMapping("/{id}")
    public FileResponse findById(@PathVariable String id) {
        return fileStorageService.findById(id);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<?> download(@PathVariable String id) {
        DownloadedFile file = fileStorageService.download(id);
        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(file.contentType()))
            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + file.fileName() + "\"")
            .body(file.resource());
    }
}
