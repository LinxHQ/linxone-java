//package com.linxone.repository;
//
//import com.linxone.entity.Customer;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//
//@DataJpaTest
//public class CustomerRepositoryTest {
//    @Autowired
//    private TestEntityManager entityManager;
//
//    @Autowired
//    private CustomerRepository customerRepo;
//
//    @BeforeEach
//    void init(){
//        Customer customer = new Customer();
//        customer.setId(100);
//        customer.setName("NTT");
//        entityManager.persist(customer);
//        entityManager.flush();
//    }
//
//    @DisplayName("findByName can return a customer has name NTT")
//    @Test
//    public void whenFindByName_thenReturnCustomer () {
//        assert(customerRepo.findById(100).getName().equals("NTT"));
//    }
//}
