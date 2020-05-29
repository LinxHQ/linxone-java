package com.linxone.webservice;

import com.linxone.entity.Invoice;
import com.linxone.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apis/invoice")
public class InvoiceWS {
    @Autowired
    InvoiceService invoiceService;

    @GetMapping("")
    public ResponseEntity<List<Invoice>> getAll(){
        List<Invoice> invoices = invoiceService.getAll();
        if(invoices.size()==0){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(invoiceService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getById(@PathVariable(name = "id")int id){
        Invoice invoice = invoiceService.getById(id);
        if(invoice==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(invoice, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/get-by-id-customer/{id}")
    public ResponseEntity<List<Invoice>> getByIdCustomer(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(invoiceService.getByCustomerId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/get-by-id-customer-and-due/{id}/{due}")
    public ResponseEntity<List<Invoice>> getByIdCustomerAndDue(@PathVariable(name = "id") int id, @PathVariable(name = "due") int due){
        return new ResponseEntity<>(invoiceService.getByCustomerIdAndDue(id, due), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Invoice> create(@RequestBody Invoice invoice){
        return new ResponseEntity<>(invoiceService.add(invoice),HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Invoice> update(@RequestBody Invoice invoice){
        return new ResponseEntity<>(invoiceService.update(invoice),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Invoice> delete(@PathVariable(name = "id")int id) {
        invoiceService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
