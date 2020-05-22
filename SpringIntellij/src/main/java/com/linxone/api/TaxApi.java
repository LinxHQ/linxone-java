package com.linxone.api;

import com.linxone.entity.Tax;
import com.linxone.service.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tax")
public class TaxApi {
    @Autowired
    TaxService taxSer;

    @GetMapping({"/get","/"})
    public ResponseEntity<List<Tax>> get(){
        return new ResponseEntity<>(taxSer.getAll(), HttpStatus.OK);
    }

    @GetMapping({"/get/{id}"})
    public ResponseEntity<Tax> getById(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(taxSer.getById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Tax> create(@RequestBody Tax tax){
        return new ResponseEntity<>(taxSer.add(tax), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<Tax> update(@RequestBody Tax tax){
        return new ResponseEntity<>(taxSer.update(tax), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<Tax> delete(@RequestBody Tax tax) {
        taxSer.delete(tax);
        return ResponseEntity.ok().build();
    }
}
