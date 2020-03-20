package com.linxone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linxone.entity.CatalogProduct;
import com.linxone.repository.CatalogProductRepository;

@Service
public class CatalogProductService {
	@Autowired CatalogProductRepository catalogProductRepo;
	
	public List<CatalogProduct> getAll(){
		return catalogProductRepo.findAll();
	}
	
	public CatalogProduct getById(int id) {
		return catalogProductRepo.findById(id);
	}
	
	public CatalogProduct add(CatalogProduct catalogProduct) {
		return catalogProductRepo.save(catalogProduct);
	}
	
	public CatalogProduct update(CatalogProduct catalogProduct) {
		return catalogProductRepo.save(catalogProduct);
	}
	
	public void delete(CatalogProduct catalogProduct) {
		catalogProductRepo.delete(catalogProduct);
	}
}
