package com.leperfume.service;

import com.leperfume.entity.Perfume;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("le_perfume")
class PerfumeServiceTest {
    @Autowired
    PerfumeService perfumeService;
    @Test
    void getAll() {
        List<Perfume> perfumes = perfumeService.getAll();
        System.out.println(perfumes);
    }

    @Test
    void getById() {
    }

    @Test
    void save() {
    }

    @Test
    void delete() {
    }
}