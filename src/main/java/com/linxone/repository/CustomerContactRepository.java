package com.linxone.repository;

import com.linxone.entity.CustomerContact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerContactRepository extends JpaRepository<CustomerContact, Integer> {
    CustomerContact findById(int id);
    List<CustomerContact> findByCustomerId(int id);
    void deleteById(int id);
}
