package com.leperfume.controller;

import com.leperfume.entity.Perfume;
import com.leperfume.service.PerfumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfume")
@CrossOrigin(origins = "http://localhost:5173")
public class PerfumeController {
    @Autowired
    PerfumeService perfumeService;


    @GetMapping
    public ResponseEntity<List<Perfume>> getAllPerfumes() {
        List<Perfume> perfumes = perfumeService.getAll();
        return ResponseEntity.ok(perfumes);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> saveUser(@RequestBody Perfume perfume) {
        perfumeService.save(perfume);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        perfumeService.delete(id);
        return ResponseEntity.ok().build();
    }

}
