package com.linxone.webservice;

import com.linxone.entity.Customer;
import com.linxone.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apis/customer")
public class CustomerWS {
    @Autowired
    CustomerService customerService;

    @GetMapping("")
    public ResponseEntity<List<Customer>> getAll(){
        List<Customer> customers = customerService.getAll();
        if(customers.size()==0){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getById(@PathVariable(name = "id")int id){
        Customer customer = customerService.getById(id);
        if(customer==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Customer> create(@RequestBody Customer customer){
        return new ResponseEntity<>(customerService.add(customer),HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Customer> update(@RequestBody Customer customer){
        return new ResponseEntity<>(customerService.update(customer),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Customer> delete(@PathVariable(name = "id")int id) {
        customerService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
