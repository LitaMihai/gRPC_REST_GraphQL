package com.example.rest_api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost")
public class UserController {

    @GetMapping("/rest")
    public ResponseEntity<Map<String, String>> getTestData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from backend!");
        return ResponseEntity.ok(response);
    }
}
