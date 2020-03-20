package com.linxone.entity;

import java.io.Serializable;

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
@Table(name = "lb_catalog_products")
@NoArgsConstructor
@Getter
@Setter
public class CatalogProduct implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@Column(name = "lb_product_name")
	private String productName;
	
	@Column(name = "lb_product_price")
	private float productPrice;
	
	@Column(name = "lb_product_tax")
	private float productTax;
	
	@Column(name = "lb_product_description")
	private String productDescription;
}
