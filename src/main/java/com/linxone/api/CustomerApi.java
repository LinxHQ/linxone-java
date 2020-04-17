package com.linxone.api;

import com.linxone.entity.Customer;
import com.linxone.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/customer")
public class CustomerApi {
        @Autowired
        CustomerService customerSer;

        @GetMapping({"/get","/"})
        public ResponseEntity<List<Customer>> get(){
            ArrayList<Customer> customers = new ArrayList<>(customerSer.getAll());
            ArrayList<Customer> customers1 = new ArrayList<>();
            for(Customer customer : customers){
                customers1.add(customer);
            }
            return new ResponseEntity<>(customers1, HttpStatus.OK);
        }

        @GetMapping({"/get/{id}"})
        public ResponseEntity<Customer> get(@PathVariable(name = "id") int id){
            return new ResponseEntity<>(customerSer.getById(id), HttpStatus.OK);
        }

        @PostMapping("/create")
        public ResponseEntity<Customer> create(@RequestBody Customer customer){
            return new ResponseEntity<>(customerSer.add(customer), HttpStatus.OK);
        }

        @PostMapping("/update")
        public ResponseEntity<Customer> update(@RequestBody Customer customer){
            return new ResponseEntity<>(customerSer.update(customer), HttpStatus.OK);
        }

        @PostMapping("/delete")
        public ResponseEntity<List<Customer>> delete(@RequestBody Customer customer) {
            customerSer.delete(customer);
            return new ResponseEntity<>(customerSer.getAll(),HttpStatus.OK);
        }
}
