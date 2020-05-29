package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.linxone.entity.Invoice;

import java.sql.Date;
import java.util.List;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer>{
	Invoice findById(int id);
	List<Invoice> findByCustomerId(int id);

	@Query("select i from Invoice i where i.customer.id = ?1 and DATEDIFF(CURDATE(), i.dueDate ) >= ?2 and DATEDIFF(CURDATE(), i.dueDate ) <= ?3")
	List<Invoice> findByCustomerIdAndDueDate(int idCustomer, int start, int end);

	@Query("select i from Invoice i where i.customer.id = ?1 and DATEDIFF(CURDATE(), i.dueDate ) >= ?2 ")
	List<Invoice> findByCustomerIdAndDueDate(int idCustomer, int time);

	void deleteById(int id);
}
