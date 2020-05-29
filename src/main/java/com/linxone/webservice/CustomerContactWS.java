package com.linxone.webservice;

import com.linxone.entity.CustomerContact;
import com.linxone.service.CustomerContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apis/customer-contact")
public class CustomerContactWS {
    @Autowired
    CustomerContactService customerContactSer;

    @GetMapping
    public ResponseEntity<List<CustomerContact>> get(){
        return new ResponseEntity<>(customerContactSer.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerContact> get(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(customerContactSer.getById(id), HttpStatus.OK);
    }

    @GetMapping({"/get-by-id-customer/{id}"})
    public ResponseEntity<List<CustomerContact>> getByIdCustomer(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(customerContactSer.getByCustomerId(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CustomerContact> create(@RequestBody CustomerContact customerContact){
        return new ResponseEntity<>(customerContactSer.add(customerContact), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<CustomerContact> update(@RequestBody CustomerContact customerContact){
        return new ResponseEntity<>(customerContactSer.update(customerContact), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<CustomerContact> delete(@PathVariable(name = "id")int id) {
        customerContactSer.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
