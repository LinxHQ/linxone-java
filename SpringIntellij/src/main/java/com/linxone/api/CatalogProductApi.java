package com.linxone.api;

import com.linxone.entity.CatalogProduct;
import com.linxone.entity.Customer;
import com.linxone.service.CatalogProductService;
import com.linxone.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogProduct")
public class CatalogProductApi {
    @Autowired
    CatalogProductService catalogProductSer;

    @GetMapping({"/get","/"})
    public ResponseEntity<List<CatalogProduct>> get(){
        return new ResponseEntity<>(catalogProductSer.getAll(), HttpStatus.OK);
    }

    @GetMapping({"/get/{id}"})
    public ResponseEntity<CatalogProduct> getById(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(catalogProductSer.getById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CatalogProduct> create(@RequestBody CatalogProduct catalogProduct){
        return new ResponseEntity<>(catalogProductSer.add(catalogProduct), HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<CatalogProduct> update(@RequestBody CatalogProduct catalogProduct){
        return new ResponseEntity<>(catalogProductSer.update(catalogProduct), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<CatalogProduct> delete(@RequestBody CatalogProduct catalogProduct) {
        catalogProductSer.delete(catalogProduct);
        return ResponseEntity.ok().build();
    }
}
