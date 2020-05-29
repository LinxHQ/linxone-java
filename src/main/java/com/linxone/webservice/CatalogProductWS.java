package com.linxone.webservice;

import com.linxone.entity.CatalogProduct;
import com.linxone.service.CatalogProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apis/catalog-product")
public class CatalogProductWS {
    @Autowired
    CatalogProductService catalogProductSer;

    @GetMapping
    public ResponseEntity<List<CatalogProduct>> get(){
        return new ResponseEntity<>(catalogProductSer.getAll(), HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<CatalogProduct> getById(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(catalogProductSer.getById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CatalogProduct> create(@RequestBody CatalogProduct catalogProduct){
        return new ResponseEntity<>(catalogProductSer.add(catalogProduct), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<CatalogProduct> update(@RequestBody CatalogProduct catalogProduct){
        return new ResponseEntity<>(catalogProductSer.update(catalogProduct), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<CatalogProduct> delete(@PathVariable(name = "id")int id) {
        catalogProductSer.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
