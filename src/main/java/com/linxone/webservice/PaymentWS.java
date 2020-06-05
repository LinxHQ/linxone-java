package com.linxone.webservice;

import com.linxone.entity.Invoice;
import com.linxone.entity.Payment;
import com.linxone.service.InvoiceService;
import com.linxone.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/apis/payment")
public class PaymentWS {
    @Autowired
    PaymentService paymentService;

    @Autowired
    InvoiceService invoiceService;

    @GetMapping("")
    public ResponseEntity<List<Payment>> getAll(){
        List<Payment> payments = paymentService.getAll();
        if(payments.size()==0){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(paymentService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getById(@PathVariable(name = "id")int id){
        Payment payment = paymentService.getById(id);
        if(payment==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(payment, HttpStatus.OK);
        }
    }

    @GetMapping({"/id-customer/{idCustomer}/startdate/{startDate}/enddate/{endDate}"})
    public ResponseEntity<List<Payment>> getByIdCustomerAndStartdateAndEnddate(@PathVariable(name = "idCustomer") int idCustomer,
                                             @PathVariable(name = "startDate") Date startDate,
                                             @PathVariable(name = "endDate") Date endDate){
        return new ResponseEntity<>(paymentService.getByIdCustomerAndStartDateAndEndDate(idCustomer,startDate,endDate), HttpStatus.OK);
    }

    @GetMapping({"/id-invoice/{idInvoice}/startdate/{startDate}/enddate/{endDate}"})
    public ResponseEntity<List<Payment>> getByIdInvoiceAndStartDateAndEndDate(@PathVariable(name = "idInvoice") int idInvoice,
                                                                              @PathVariable(name = "startDate") Date startDate,
                                                                              @PathVariable(name = "endDate") Date endDate){
        return new ResponseEntity<>(paymentService.getByIdInvoiceAndStartDateAndEndDate(idInvoice,startDate,endDate), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Payment> create(@RequestBody Payment payment){
        Payment newPayment = paymentService.add(payment);

        Invoice invoice = payment.getInvoice();
        float totalOutstanding = invoice.getTotalOutstanding();
        float totalPaid = invoice.getTotalPaid();
        totalPaid += payment.getAmount();
        totalOutstanding -= payment.getAmount();

        invoice.setTotalOutstanding(totalOutstanding);
        invoice.setTotalPaid(totalPaid);

        invoiceService.update(invoice);
        return new ResponseEntity<>(newPayment,HttpStatus.CREATED);
    }

    @PostMapping("/create/list")
    public ResponseEntity<List<Payment>> createListPayment(@RequestBody List<Payment> payments){
        ArrayList<Payment> newListPayment = new ArrayList<>();

        for(Payment payment : payments){
            Payment newPayment = paymentService.add(payment);
            newListPayment.add(newPayment);

            Invoice invoice = payment.getInvoice();
            float totalOutstanding = invoice.getTotalOutstanding();
            float totalPaid = invoice.getTotalPaid();
            totalPaid += payment.getAmount();
            totalOutstanding -= payment.getAmount();

            invoice.setTotalOutstanding(totalOutstanding);
            invoice.setTotalPaid(totalPaid);

            invoiceService.update(invoice);
        }
        return new ResponseEntity<>(newListPayment, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Payment> update(@RequestBody Payment payment){
        return new ResponseEntity<>(paymentService.update(payment),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Payment> delete(@PathVariable(name = "id")int id) {
        paymentService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
