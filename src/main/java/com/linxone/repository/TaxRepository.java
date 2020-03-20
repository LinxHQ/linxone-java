package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.Tax;

@Repository
public interface TaxRepository extends JpaRepository<Tax, Integer>{
	Tax findById(int id);
}
