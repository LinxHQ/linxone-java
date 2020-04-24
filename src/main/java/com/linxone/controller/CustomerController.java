package com.linxone.controller;

import com.linxone.entity.Address;
import com.linxone.entity.Customer;
import com.linxone.entity.CustomerContact;
import com.linxone.entity.Invoice;
import com.linxone.service.AddressService;
import com.linxone.service.CustomerContactService;
import com.linxone.service.CustomerService;
import com.linxone.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/user/customer")
public class CustomerController {
    @Autowired
    CustomerService customerSer;

    @Autowired
    AddressService addressSer;

    @Autowired
    CustomerContactService customerContactSer;

    @Autowired
    InvoiceService invoiceSer;

    @GetMapping("/")
    public String view(Model model){
        List<Customer> customers = customerSer.getAll();
        model.addAttribute("customers",customers);
        return "customer";
    }

    @GetMapping("/new")
    public String newCustomer(){
        return "newCustomer";
    }

    @GetMapping("/detail/{id}")
    public String detailCustomer(Model model, @PathVariable(name = "id") int id){
        List<Address> addresses = addressSer.getByCustomerId(id);
        List<CustomerContact> contacts = customerContactSer.getByCustomerId(id);
        List<Invoice> invoices = invoiceSer.getByCustomerId(id);

        model.addAttribute("addresses", addresses);
        model.addAttribute("contacts",contacts);
        model.addAttribute("invoices", invoices);
        return "detailCustomer";
    }
}
