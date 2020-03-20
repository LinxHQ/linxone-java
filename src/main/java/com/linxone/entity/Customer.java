package com.linxone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "lb_customers")
@NoArgsConstructor
@Getter
@Setter
public class Customer implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@Column(name = "lb_customer_name")
	private String name;
	
	@OneToOne
	@JoinColumn(name = "lb_address_id")
	private Address address;
	
	@OneToOne
	@JoinColumn(name = "lb_customer_tax_id")
	private Tax tax;
}
