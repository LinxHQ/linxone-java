package com.linxone.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "lb_expenses")
public class Expenses implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lb_record_primary_key")
    private int id;

    @Column(name = "lb_category_id")
    private CategoryExpenses categoryExpenses;

    @Column(name = "lb_expenses_no")
    private String no;

    @Column(name = "lb_expenses_note")
    private String note;

    @Column(name = "lb_expenses_amount")
    private float amount;

    @Column(name = "lb_expenses_date")
    private Date date;

    @Column(name = "lb_expenses_recurring_id")
    private int recurring;

    @ManyToOne
    @JoinColumn(name = "lb_expenses_customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "lb_expenses_invoice_id")
    private Invoice invoice;

    @ManyToMany
    @JoinTable(
            name = "lb_expenses_tax",
            joinColumns = @JoinColumn(name = "lb_expenses_id"),
            inverseJoinColumns = @JoinColumn(name = "lb_tax_id")
    )
    private List<Tax> taxes;

    public Expenses() {
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public CategoryExpenses getCategoryExpenses() {
        return categoryExpenses;
    }

    public void setCategoryExpenses(CategoryExpenses categoryExpenses) {
        this.categoryExpenses = categoryExpenses;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getRecurring() {
        return recurring;
    }

    public void setRecurring(int recurring) {
        this.recurring = recurring;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public List<Tax> getTaxes() {
        return taxes;
    }

    public void setTaxes(List<Tax> taxes) {
        this.taxes = taxes;
    }
}