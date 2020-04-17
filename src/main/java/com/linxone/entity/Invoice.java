package com.linxone.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;


@Entity
@Table(name = "lb_invoices")
public class Invoice implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@Column(name = "lb_invoice_no")
	private String no;
	
	@Column(name = "lb_invoice_date")
	private Date date;
	
	@Column(name = "lb_invoice_due_date")
	private Date dueDate;

	@ManyToOne
	@JoinColumn(name = "lb_invoice_customer_id")
	private Customer customer;
	
	@Column(name = "lb_invoice_subject")
	private String subject;
	
	@Column(name = "lb_invoice_note")
	private String note;
	
	@Column(name = "lb_invoice_encode")
	private String encode;

	@Column(name = "lb_invoice_subtotal")
	private float subtotal;

	@Column(name = "lb_invoice_total_after_discounts")
	private float totalAfterDiscount;

	@Column(name = "lb_invoice_total_after_taxes")
	private float totalAfterTax;

	@Column(name = "lb_invoice_total_paid")
	private float totalPaid;

	@Column(name = "lb_invoice_total_outstanding")
	private float totalOutstanding;

	public Invoice() {
	}

	public float getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(float subtotal) {
		this.subtotal = subtotal;
	}

	public float getTotalAfterDiscount() {
		return totalAfterDiscount;
	}

	public void setTotalAfterDiscount(float totalAfterDiscount) {
		this.totalAfterDiscount = totalAfterDiscount;
	}

	public float getTotalAfterTax() {
		return totalAfterTax;
	}

	public void setTotalAfterTax(float totalAfterTax) {
		this.totalAfterTax = totalAfterTax;
	}

	public float getTotalPaid() {
		return totalPaid;
	}

	public void setTotalPaid(float totalPaid) {
		this.totalPaid = totalPaid;
	}

	public float getTotalOutstanding() {
		return totalOutstanding;
	}

	public void setTotalOutstanding(float totalOutstanding) {
		this.totalOutstanding = totalOutstanding;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getEncode() {
		return encode;
	}

	public void setEncode(String encode) {
		this.encode = encode;
	}
}
