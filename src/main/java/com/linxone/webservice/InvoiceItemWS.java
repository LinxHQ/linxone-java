package com.linxone.webservice;

import com.linxone.entity.InvoiceItem;
import com.linxone.service.InvoiceItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/apis/invoice-item")
public class InvoiceItemWS {
    @Autowired
    InvoiceItemService invoiceItemSer;

    @GetMapping("")
    public ResponseEntity<List<InvoiceItem>> get(){
        return new ResponseEntity<>(invoiceItemSer.getAll(), HttpStatus.OK);
    }

    @GetMapping("/get-by-id-invoice/{id}")
    public ResponseEntity<List<InvoiceItem>> getByIdInvoice(@PathVariable(name = "id")int id){
        return new ResponseEntity<>(invoiceItemSer.getByIdInvoice(id), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<InvoiceItem> create(@RequestBody InvoiceItem invoiceItem){
        InvoiceItem newInvoiceItem = invoiceItemSer.add(invoiceItem);
        return new ResponseEntity<>(newInvoiceItem, HttpStatus.OK);
    }

    @PostMapping(value = "/create/list")
    public ResponseEntity<List<InvoiceItem>> create(@RequestBody List<InvoiceItem> invoiceItems){
        ArrayList<InvoiceItem> newInvoiceItems = new ArrayList<InvoiceItem>();
        for(InvoiceItem invoiceItem : invoiceItems){
            newInvoiceItems.add(invoiceItemSer.add(invoiceItem));
        }
        return new ResponseEntity<>(newInvoiceItems, HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<InvoiceItem> update(@RequestBody InvoiceItem invoiceItem){
        return new ResponseEntity<>(invoiceItemSer.update(invoiceItem), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<InvoiceItem> delete(@PathVariable(name = "id")int id){
        invoiceItemSer.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
