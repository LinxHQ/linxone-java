package com.linxone.api;

import com.linxone.entity.CategoryExpenses;
import com.linxone.entity.Expenses;
import com.linxone.repository.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpensesApi {
    @Autowired
    ExpensesRepository expensesRepo;


    @RequestMapping(value = {"/get", ""})
    public ResponseEntity<List<Expenses>> getAll(){
        return new ResponseEntity<>(expensesRepo.findAll(), HttpStatus.OK);
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Expenses> getById(@PathVariable(name = "id")int id){
        return new ResponseEntity<>(expensesRepo.findById(id), HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<Expenses> create(@RequestBody Expenses expenses){
        return new ResponseEntity<>(expensesRepo.save(expenses),HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<Expenses> update(@RequestBody Expenses expenses){
        return new ResponseEntity<>(expensesRepo.save(expenses),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable(name = "id")int id){
        expensesRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search/category/{category}/from/{from}/to/{to}")
    public ResponseEntity<List<Expenses>> search(@PathVariable(name = "category") String category,
                                                 @PathVariable(name = "from") String from,
                                                 @PathVariable(name = "to") String to ){
        return new ResponseEntity<>(expensesRepo.findByCategoryExpensesAndDateBetween(CategoryExpenses.valueOf(category),Date.valueOf(from),Date.valueOf(to)), HttpStatus.OK);
    }

    @GetMapping("/search/from/{from}/to/{to}")
    public ResponseEntity<List<Expenses>> search(@PathVariable(name = "from") String from,
                                                 @PathVariable(name = "to") String to ){
        return new ResponseEntity<>(expensesRepo.findByDateBetween(Date.valueOf(from),Date.valueOf(to)), HttpStatus.OK);
    }
}
