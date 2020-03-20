package com.linxone.api;

import com.linxone.entity.Customer;
import com.linxone.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerApi {
        @Autowired
        CustomerService customerSer;

        @GetMapping({"/get","/"})
        public ResponseEntity<List<Customer>> get(){
            return new ResponseEntity<>(customerSer.getAll(), HttpStatus.OK);
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
        public ResponseEntity<Customer> delete(@RequestBody Customer customer) {
            return new ResponseEntity<>(customerSer.add(customer), HttpStatus.OK);
        }
}
