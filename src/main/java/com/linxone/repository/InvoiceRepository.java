package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.Invoice;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer>{
	Invoice findById(int id);
}
