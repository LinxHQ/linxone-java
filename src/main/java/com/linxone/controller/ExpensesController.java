package com.linxone.controller;

import com.linxone.entity.Expenses;
import com.linxone.repository.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/expenses")
public class ExpensesController {
    @Autowired
    ExpensesRepository expensesRepo;

    @GetMapping("/{id}")
    public String detail(@PathVariable(name = "id")int id, Model model){
        Expenses e = expensesRepo.findById(id);
        model.addAttribute("expenses", e);
        return "expenses_detail";
    }
}
