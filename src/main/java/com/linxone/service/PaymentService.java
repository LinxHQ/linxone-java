package com.linxone.service;

import com.linxone.entity.Invoice;
import com.linxone.entity.Payment;
import com.linxone.repository.InvoiceRepository;
import com.linxone.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class PaymentService {
    @Autowired
    PaymentRepository paymentRepo;

    public List<Payment> getAll(){
        return paymentRepo.findAll();
    }

    public Payment getById(int id) {
        return paymentRepo.findById(id);
    }

    public List<Payment> getByIdCustomerAndStartDateAndEndDate(int idCustomer, Date startDate, Date endDate){
        return paymentRepo.findByInvoice_Customer_IdAndDateAfterAndDateBefore(idCustomer,startDate,endDate);
    }

    public List<Payment> getByIdInvoiceAndStartDateAndEndDate(int idInvoice, Date startDate, Date endDate){
        return paymentRepo.findByInvoice_IdAndDateAfterAndDateBefore(idInvoice,startDate,endDate);
    }

    public Payment add(Payment payment) {
        return paymentRepo.save(payment);
    }

    @Transactional
    public List<Payment> addList(List<Payment> payments) {
        return paymentRepo.saveAll(payments);
    }

    public Payment update(Payment payment) {
        return paymentRepo.save(payment);
    }

    public void delete(Payment payment) {
        paymentRepo.delete(payment);
    }

    public void delete(int id){
        paymentRepo.deleteById(id);
    }

    public List<Payment> getByInvoiceId(int id){
        return paymentRepo.findByInvoiceId(id);
    }
}
