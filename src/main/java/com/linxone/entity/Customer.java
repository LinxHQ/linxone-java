package com.linxone.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;


@Entity
@Table(name = "lb_customers")
public class Customer implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@Column(name = "lb_customer_name")
	private String name;


	@OneToOne
	@JoinColumn(name = "lb_customer_tax_id")
	private Tax tax;

	@Column(name = "lb_customer_registration")
	private String registration;

	@Column(name = "lb_customer_type")
	private String type;

	public Customer() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Tax getTax() {
		return tax;
	}

	public void setTax(Tax tax) {
		this.tax = tax;
	}

	public String getRegistration() {
		return registration;
	}

	public void setRegistration(String registration) {
		this.registration = registration;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
