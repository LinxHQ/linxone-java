package com.linxone.repository;

import com.linxone.entity.CategoryExpenses;
import com.linxone.entity.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface ExpensesRepository extends JpaRepository<Expenses, Integer> {
    void deleteById(int id);
    Expenses findById(int id);
    List<Expenses> findByCategoryExpensesAndDateBetween(CategoryExpenses ce, Date from, Date to);
    List<Expenses> findByDateBetween(Date from, Date to);
    List<Expenses> findByCategoryExpenses(CategoryExpenses ce);
    List<Expenses> findByDateAfter(Date from);
    List<Expenses> findByDateBefore(Date to);
    List<Expenses> findByCategoryExpensesAndDateBefore(CategoryExpenses ce, Date to);
    List<Expenses> findByCategoryExpensesAndDateAfter(CategoryExpenses ce, Date from);
}
