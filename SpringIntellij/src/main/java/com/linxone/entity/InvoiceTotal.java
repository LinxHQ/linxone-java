//package com.linxone.entity;
//
//import java.io.Serializable;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Entity
//@Table(name = "lb_invoice_totals")
//public class InvoiceTotal implements Serializable{
//	private static final long serialVersionUID = 1L;
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "lb_record_primary_key")
//	private int id;
//
//	@OneToOne
//	@JoinColumn(name = "lb_invoice_id")
//	private Invoice invoice;
//
//	@Column(name = "lb_invoice_subtotal")
//	private float subtotal;
//
//	@Column(name = "lb_invoice_total_after_discounts")
//	private float totalAfterDiscount;
//
//	@Column(name = "lb_invoice_total_after_taxes")
//	private float totalAfterTax;
//
//	@Column(name = "lb_invoice_total_paid")
//	private float totalPaid;
//
//	@Column(name = "lb_invoice_total_outstanding")
//	private float totalOutstanding;
//
//	public InvoiceTotal() {
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public Invoice getInvoice() {
//		return invoice;
//	}
//
//	public void setInvoice(Invoice invoice) {
//		this.invoice = invoice;
//	}
//
//	public float getSubtotal() {
//		return subtotal;
//	}
//
//	public void setSubtotal(float subtotal) {
//		this.subtotal = subtotal;
//	}
//
//	public float getTotalAfterDiscount() {
//		return totalAfterDiscount;
//	}
//
//	public void setTotalAfterDiscount(float totalAfterDiscount) {
//		this.totalAfterDiscount = totalAfterDiscount;
//	}
//
//	public float getTotalAfterTax() {
//		return totalAfterTax;
//	}
//
//	public void setTotalAfterTax(float totalAfterTax) {
//		this.totalAfterTax = totalAfterTax;
//	}
//
//	public float getTotalPaid() {
//		return totalPaid;
//	}
//
//	public void setTotalPaid(float totalPaid) {
//		this.totalPaid = totalPaid;
//	}
//
//	public float getTotalOutstanding() {
//		return totalOutstanding;
//	}
//
//	public void setTotalOutstanding(float totalOutstanding) {
//		this.totalOutstanding = totalOutstanding;
//	}
//}
