package com.linxone.api;

import com.linxone.entity.InvoiceItem;
import com.linxone.service.InvoiceItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/invoiceItem")
public class InvoiceItemApi {
    @Autowired
    InvoiceItemService invoiceItemSer;

    @GetMapping(value = {"/get","/"})
    public ResponseEntity<List<InvoiceItem>> get(){
        return new ResponseEntity<>(invoiceItemSer.getAll(), HttpStatus.OK);
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

    @PostMapping(value = "/update")
    public ResponseEntity<InvoiceItem> update(@RequestBody InvoiceItem invoiceItem){
        return new ResponseEntity<>(invoiceItemSer.update(invoiceItem), HttpStatus.OK);
    }

    @PostMapping(value = "/delete")
    public ResponseEntity<InvoiceItem> delete(@RequestBody InvoiceItem invoiceItem){
        return new ResponseEntity<>(invoiceItemSer.add(invoiceItem), HttpStatus.NO_CONTENT);
    }
}
