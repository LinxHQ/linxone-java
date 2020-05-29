package com.linxone.api;

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
@RequestMapping("/api/payment")
public class PaymentApi {
    @Autowired
    PaymentService paymentSer;

    @Autowired
    InvoiceService invoiceSer;

    @GetMapping({"/get","/"})
    public ResponseEntity<List<Payment>> get(){
        ArrayList<Payment> payments = new ArrayList<>(paymentSer.getAll());
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }

    @GetMapping({"/get/{id}"})
    public ResponseEntity<Payment> get(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(paymentSer.getById(id), HttpStatus.OK);
    }

    @GetMapping({"/getByIdCustomerAndStartDateAndEndDate/{idCustomer}/{startDate}/{endDate}"})
    public ResponseEntity<List<Payment>> get(@PathVariable(name = "idCustomer") int idCustomer,
                                       @PathVariable(name = "startDate") Date startDate,
                                       @PathVariable(name = "endDate") Date endDate){
        return new ResponseEntity<>(paymentSer.getByIdCustomerAndStartDateAndEndDate(idCustomer,startDate,endDate), HttpStatus.OK);
    }

    @GetMapping({"/getByIdInvoiceAndStartDateAndEndDate/{idInvoice}/{startDate}/{endDate}"})
    public ResponseEntity<List<Payment>> getByIdInvoiceAndStartDateAndEndDate(@PathVariable(name = "idInvoice") int idInvoice,
                                                                                 @PathVariable(name = "startDate") Date startDate,
                                                                                 @PathVariable(name = "endDate") Date endDate){
        return new ResponseEntity<>(paymentSer.getByIdInvoiceAndStartDateAndEndDate(idInvoice,startDate,endDate), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Payment> create(@RequestBody Payment payment){
        Payment newPayment = paymentSer.add(payment);

        Invoice invoice = payment.getInvoice();
        float totalOutstanding = invoice.getTotalOutstanding();
        float totalPaid = invoice.getTotalPaid();
        totalPaid += payment.getAmount();
        totalOutstanding -= payment.getAmount();

        invoice.setTotalOutstanding(totalOutstanding);
        invoice.setTotalPaid(totalPaid);

        invoiceSer.update(invoice);

        return new ResponseEntity<>(newPayment, HttpStatus.OK);
    }

    @PostMapping("/create/list")
    public ResponseEntity<List<Payment>> createListPayment(@RequestBody List<Payment> payments){
        ArrayList<Payment> newListPayment = new ArrayList<>();

        for(Payment payment : payments){
            Payment newPayment = paymentSer.add(payment);
            newListPayment.add(newPayment);

            Invoice invoice = payment.getInvoice();
            float totalOutstanding = invoice.getTotalOutstanding();
            float totalPaid = invoice.getTotalPaid();
            totalPaid += payment.getAmount();
            totalOutstanding -= payment.getAmount();

            invoice.setTotalOutstanding(totalOutstanding);
            invoice.setTotalPaid(totalPaid);

            invoiceSer.update(invoice);
        }
        return new ResponseEntity<>(newListPayment, HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<Payment> update(@RequestBody Payment payment){
        return new ResponseEntity<>(paymentSer.update(payment), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<List<Payment>> delete(@RequestBody Payment payment) {
        paymentSer.delete(payment);
        return new ResponseEntity<>(paymentSer.getAll(), HttpStatus.OK);
    }
}
