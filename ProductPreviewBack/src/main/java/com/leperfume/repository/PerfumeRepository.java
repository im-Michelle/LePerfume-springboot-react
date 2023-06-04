package com.leperfume.repository;

import com.leperfume.entity.Perfume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfumeRepository extends JpaRepository<Perfume,Integer> {
}
