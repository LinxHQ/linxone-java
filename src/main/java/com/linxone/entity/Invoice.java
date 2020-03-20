package com.linxone.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "lb_invoices")
@NoArgsConstructor
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
	
	@Column(name = "lb_invoice_subject")
	private String subject;
	
	@Column(name = "lb_invoice_note")
	private String note;
	
	@Column(name = "lb_invoice_encode")
	private String encode;
}
