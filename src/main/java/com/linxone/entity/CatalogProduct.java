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
@Getter
@Setter
@NoArgsConstructor
public class CatalogProduct implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private Integer id;
	
	@Column(name = "lb_product_name")
	private String name;
	
	@Column(name = "lb_product_price")
	private float price;
	
	@Column(name = "lb_product_description")
	private String description;

}
