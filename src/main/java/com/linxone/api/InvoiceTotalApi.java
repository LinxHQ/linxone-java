package com.linxone.api;

import com.linxone.entity.InvoiceTotal;
import com.linxone.service.InvoiceTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/invoiceTotal")
public class InvoiceTotalApi {
    @Autowired
    InvoiceTotalService invoiceTotalSer;

    @GetMapping(value = {"/get","/"})
    public ResponseEntity<List<InvoiceTotal>> get(){
        return new ResponseEntity<>(invoiceTotalSer.getAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<InvoiceTotal> create(@RequestBody InvoiceTotal invoiceTotal){
        InvoiceTotal newInvoiceTotal = invoiceTotalSer.add(invoiceTotal);
        return new ResponseEntity<>(newInvoiceTotal, HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<InvoiceTotal> update(@RequestBody InvoiceTotal invoiceTotal){
        return new ResponseEntity<>(invoiceTotalSer.update(invoiceTotal), HttpStatus.OK);
    }

    @PostMapping(value = "/delete")
    public ResponseEntity<InvoiceTotal> delete(@RequestBody InvoiceTotal invoiceTotal){
        invoiceTotalSer.delete(invoiceTotal);
        return ResponseEntity.ok().build();
    }
}
