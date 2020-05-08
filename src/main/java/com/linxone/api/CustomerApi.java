package com.linxone.api;

import com.linxone.entity.Customer;
import com.linxone.service.CustomerService;
import net.sf.jasperreports.engine.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/customer")
public class CustomerApi {
        @Autowired
        CustomerService customerSer;

        @GetMapping({"/get","/"})
        public ResponseEntity<List<Customer>> get(){
            ArrayList<Customer> customers = new ArrayList<>(customerSer.getAll());
            ArrayList<Customer> customers1 = new ArrayList<>();
            for(Customer customer : customers){
                customers1.add(customer);
            }
            return new ResponseEntity<>(customers1, HttpStatus.OK);
        }

        @GetMapping("/get/printPDF")
        public ResponseEntity<Object> print() throws JRException, IOException {
            String dbUrl = "jdbc:mysql://localhost:3306/linxone?autoReconnect=true&useSSL=false";
            String dbClass = "com.mysql.cj.jdbc.Driver";
            Connection con = null;
            try {
                Class.forName(dbClass);
                con = DriverManager.getConnection (dbUrl, "root", "12345678");

            }catch(Exception e) {
                e.printStackTrace();
            }
            JasperReport jr = JasperCompileManager.compileReport("D:/SpringIntellij/src/main/resources/static/Customer.jrxml");
//            Map<String, Object> parameters = new HashMap<String, Object>();
//            parameters.put("idBill", idBill);
            JasperPrint jp = JasperFillManager.fillReport(jr, new HashMap<>(), con);

            String urlResult = "D:/SpringIntellij/reports/customerReport.pdf";
            JasperExportManager.exportReportToPdfFile(jp, urlResult);

            File file = new File(urlResult);
            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
            ResponseEntity<Object> response = ResponseEntity.ok().contentLength(file.length()).contentType(MediaType.parseMediaType("application/pdf")).body(resource);
            return response;

        }

        @GetMapping({"/get/{id}"})
        public ResponseEntity<Customer> get(@PathVariable(name = "id") int id){
            return new ResponseEntity<>(customerSer.getById(id), HttpStatus.OK);
        }

        @PostMapping("/create")
        public ResponseEntity<Customer> create(@RequestBody Customer customer){
            return new ResponseEntity<>(customerSer.add(customer), HttpStatus.OK);
        }

        @PostMapping("/update")
        public ResponseEntity<Customer> update(@RequestBody Customer customer){
            return new ResponseEntity<>(customerSer.update(customer), HttpStatus.OK);
        }

        @PostMapping("/delete")
        public ResponseEntity<List<Customer>> delete(@RequestBody Customer customer) {
            customerSer.delete(customer);
            return new ResponseEntity<>(customerSer.getAll(),HttpStatus.OK);
        }
}
