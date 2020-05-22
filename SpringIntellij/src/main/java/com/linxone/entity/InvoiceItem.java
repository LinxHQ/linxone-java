package com.linxone.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "lb_invoice_items")
public class InvoiceItem implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "lb_invoice_id")
	private Invoice invoice;

	@ManyToOne
	@JoinColumn(name = "lb_invoice_catalog_product_id")
	private CatalogProduct catalogProduct;
	
	@Column(name = "lb_invoice_item_quantity")
	private float quantity;
	
	@Column(name = "lb_invoice_item_value")
	private float value;
	
	@Column(name = "lb_invoice_item_total")
	private float total;

	public InvoiceItem() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public CatalogProduct getCatalogProduct() {
		return catalogProduct;
	}

	public void setCatalogProduct(CatalogProduct catalogProduct) {
		this.catalogProduct = catalogProduct;
	}

	public float getQuantity() {
		return quantity;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
}
