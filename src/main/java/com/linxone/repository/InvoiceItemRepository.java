package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.InvoiceItem;

import java.util.List;

@Repository
public interface InvoiceItemRepository extends JpaRepository<InvoiceItem, Integer>{
	InvoiceItem findById(int id);
	void deleteById(int id);
	List<InvoiceItem> findByInvoice_Id(int id);
}
