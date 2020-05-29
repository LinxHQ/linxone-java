package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.CatalogProduct;

@Repository
public interface CatalogProductRepository extends JpaRepository<CatalogProduct, Integer>{
	CatalogProduct findById(int id);
	void deleteById(int id);
}
