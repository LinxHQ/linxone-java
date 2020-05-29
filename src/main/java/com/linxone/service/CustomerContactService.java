package com.linxone.service;

import com.linxone.entity.Customer;
import com.linxone.entity.CustomerContact;
import com.linxone.repository.CustomerContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerContactService {
    @Autowired
    CustomerContactRepository customerContactRepo;

    public List<CustomerContact> getAll(){
        return customerContactRepo.findAll();
    }

    public CustomerContact getById(int id) {
        return customerContactRepo.findById(id);
    }

    public CustomerContact add(CustomerContact customerContact) {
        return customerContactRepo.save(customerContact);
    }

    public CustomerContact update(CustomerContact customerContact) {
        return customerContactRepo.save(customerContact);
    }

    public void delete(CustomerContact customerContact) {
        customerContactRepo.delete(customerContact);
    }

    public void delete(int id) {
        customerContactRepo.deleteById(id);
    }

    public List<CustomerContact> getByCustomerId(int id){
        return customerContactRepo.findByCustomerId(id);
    }

}
