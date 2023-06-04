package com.leperfume.service;

import com.leperfume.entity.Perfume;

import java.util.List;
import java.util.Optional;

public interface PerfumeService {

    public List<Perfume> getAll();
    public Optional<Perfume> getById(Integer id);
    public void save(Perfume perfume);
    public void delete(Integer id);
}
