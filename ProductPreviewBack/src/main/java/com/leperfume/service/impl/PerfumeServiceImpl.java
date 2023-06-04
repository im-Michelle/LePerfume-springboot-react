package com.leperfume.service.impl;

import com.leperfume.entity.Perfume;
import com.leperfume.repository.PerfumeRepository;
import com.leperfume.service.PerfumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfumeServiceImpl implements PerfumeService {

    @Autowired
    PerfumeRepository perfumeRepository;

    @Override
    public List<Perfume> getAll() {
        return perfumeRepository.findAll();
    }

    @Override
    public Optional<Perfume> getById(Integer id) {
        return perfumeRepository.findById(id);
    }

    @Override
    public void save(Perfume perfume) {
        perfumeRepository.save(perfume);
    }

    @Override
    public void delete(Integer id) {
        perfumeRepository.deleteById(id);
    }

}
