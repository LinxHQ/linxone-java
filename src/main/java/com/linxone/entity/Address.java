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
@Table(name = "lb_addresse")
@NoArgsConstructor
@Getter
@Setter
public class Address implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;
	
	@Column(name = "lb_customer_address_city")
	private String city;
	
	@Column(name = "lb_customer_address_website_url")
	private String websiteUrl;
	
	@Column(name = "lb_customer_address_phone_1")
	private String phone1;
	
	@Column(name = "lb_customer_address_phone_2")
	private String phone2;
}
