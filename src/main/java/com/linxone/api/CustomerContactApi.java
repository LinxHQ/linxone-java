package com.linxone.api;

import com.linxone.entity.CustomerContact;
import com.linxone.service.CustomerContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/customerContact")
public class CustomerContactApi {
    @Autowired
    CustomerContactService customerContactSer;

    @GetMapping({"/get","/"})
    public ResponseEntity<List<CustomerContact>> get(){
        return new ResponseEntity<>(customerContactSer.getAll(), HttpStatus.OK);
    }

    @GetMapping({"/get/{id}"})
    public ResponseEntity<CustomerContact> get(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(customerContactSer.getById(id), HttpStatus.OK);
    }

    @GetMapping({"/getByIDCustomer/{id}"})
    public ResponseEntity<List<CustomerContact>> getByIdCustomer(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(customerContactSer.getByCustomerId(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CustomerContact> create(@RequestBody CustomerContact customerContact){
        return new ResponseEntity<>(customerContactSer.add(customerContact), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<CustomerContact> update(@RequestBody CustomerContact customerContact){
        return new ResponseEntity<>(customerContactSer.update(customerContact), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<CustomerContact> delete(@RequestBody CustomerContact customerContact) {
        return new ResponseEntity<>(customerContactSer.add(customerContact), HttpStatus.OK);
    }
}
