package com.linxone.webservice;

import com.linxone.entity.Address;
import com.linxone.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/apis/address")
public class AddressWS {
    @Autowired
    AddressService addressSer;

    @GetMapping()
    public ResponseEntity<List<Address>> get(){
        return new ResponseEntity<>(addressSer.getAll(), HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Address> get(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(addressSer.getById(id), HttpStatus.OK);
    }

    @GetMapping({"/get-by-id-customer/{id}"})
    public ResponseEntity<List<Address>> getByIdCustomer(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(addressSer.getByCustomerId(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Address> create(@RequestBody Address address){
        return new ResponseEntity<>(addressSer.add(address), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Address> update(@RequestBody Address address){
        return new ResponseEntity<>(addressSer.update(address), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Address> delete(@RequestBody Address address) {
        return new ResponseEntity<>(addressSer.add(address), HttpStatus.OK);
    }
}
