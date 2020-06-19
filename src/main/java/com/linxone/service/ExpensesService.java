package com.linxone.service;

import com.linxone.entity.Expenses;
import com.linxone.repository.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpensesService  {
    @Autowired
    ExpensesRepository expensesRepo;
}
