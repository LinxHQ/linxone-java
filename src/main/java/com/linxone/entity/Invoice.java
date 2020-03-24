package com.linxone.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "lb_invoices")
@Getter
@Setter
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
	
	@Column(name = "lb_invoice_customer_id")
	private Customer customer;

	@OneToMany(mappedBy = "invoice")
	private List<InvoiceItem> invoiceItems;
	
	@Column(name = "lb_invoice_subject")
	private String subject;
	
	@Column(name = "lb_invoice_note")
	private String note;
	
	@Column(name = "lb_invoice_encode")
	private String encode;

	public Invoice() {
	}

	public Invoice(Customer customer, Date date, List<InvoiceItem> invoiceItems) {
		this.customer = customer;
		this.date = date;
		this.invoiceItems = invoiceItems;
	}

}
