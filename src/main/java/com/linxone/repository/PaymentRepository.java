package com.linxone.repository;

import com.linxone.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Payment findById(int id);
    List<Payment> findByInvoiceId(int id);

    List<Payment> findByInvoice_Customer_IdAndDateAfterAndDateBefore(int idCustomer, Date startDate, Date endDate);
    List<Payment> findByInvoice_IdAndDateAfterAndDateBefore(int idCustomer, Date startDate, Date endDate);

    void deleteById(int id);
}
