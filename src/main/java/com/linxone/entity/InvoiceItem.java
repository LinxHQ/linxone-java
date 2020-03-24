package com.linxone.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "lb_invoice_items")
@NoArgsConstructor
@Getter
@Setter
public class InvoiceItem implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "lb_invoice_id")
	private Invoice invoice;
	
	@Column(name = "lb_invoice_catalog_product_id")
	private CatalogProduct catalogProduct;
	
	@Column(name = "lb_invoice_item_quantity")
	private float quantity;
	
	@Column(name = "lb_invoice_item_value")
	private float value;
	
	@Column(name = "lb_invoice_item_total")
	private float total;
}
