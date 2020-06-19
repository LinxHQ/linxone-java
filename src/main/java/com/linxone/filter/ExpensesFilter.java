package com.linxone.filter;

import com.linxone.entity.CategoryExpenses;
import com.linxone.entity.Expenses;
import com.linxone.repository.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

public class ExpensesFilter implements Serializable {
    @Autowired ExpensesRepository expensesRepo;
    private CategoryExpenses categoryExpenses;
    private Date from;
    private Date to;

    public ExpensesFilter() {
    }

    public ExpensesFilter(CategoryExpenses categoryExpenses, Date from, Date to) {
        this.categoryExpenses = categoryExpenses;
        this.from = from;
        this.to = to;
    }

    public CategoryExpenses getCategoryExpenses() {
        return categoryExpenses;
    }

    public Date getFrom() {
        return from;
    }

    public Date getTo() {
        return to;
    }

    public void setCategoryExpenses(CategoryExpenses categoryExpenses) {
        this.categoryExpenses = categoryExpenses;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public List<Expenses> getResult(){
        if(categoryExpenses != null && from == null && to == null){
            return expensesRepo.findByCategoryExpenses(categoryExpenses);
        }
        if(categoryExpenses != null && from != null && to == null){
            return expensesRepo.findByCategoryExpensesAndDateAfter(categoryExpenses, from);
        }
        if(categoryExpenses != null && from == null && to != null){
            return expensesRepo.findByCategoryExpensesAndDateBefore(categoryExpenses, to);
        }
        if(categoryExpenses != null && from != null && to != null){
            return expensesRepo.findByCategoryExpensesAndDateBetween(categoryExpenses,from, to);
        }
        if(categoryExpenses == null && from != null && to == null){
            return expensesRepo.findByDateAfter(from);
        }
        if(categoryExpenses == null && from == null && to != null){
            return expensesRepo.findByDateBefore(to);
        }
        if(categoryExpenses == null && from != null && to != null){
            return expensesRepo.findByDateBetween(from, to);
        }
        return expensesRepo.findAll();
    }
}
