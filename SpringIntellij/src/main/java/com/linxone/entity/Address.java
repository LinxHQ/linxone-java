package com.linxone.entity;

import java.io.Serializable;

import javax.persistence.*;
@Entity
@Table(name = "lb_addresses")
public class Address implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lb_record_primary_key")
	private int id;

	@Column(name = "lb_customer_address_line_1")
	private String line1;

	@Column(name = "lb_customer_address_line_2")
	private String line2;

	@Column(name = "lb_customer_address_city")
	private String city;

	@Column(name = "lb_customer_address_country")
	private String country;

	@Column(name = "lb_customer_address_state")
	private String province;

	@Column(name = "lb_customer_address_postal_code")
	private String postalCode;
	
	@Column(name = "lb_customer_address_website_url")
	private String websiteUrl;
	
	@Column(name = "lb_customer_address_phone_1")
	private String phone1;
	
	@Column(name = "lb_customer_address_phone_2")
	private String phone2;

	@ManyToOne
	@JoinColumn(name = "lb_customer_id")
	private Customer customer;

	public Address() {
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLine1() {
		return line1;
	}

	public void setLine1(String line1) {
		this.line1 = line1;
	}

	public String getLine2() {
		return line2;
	}

	public void setLine2(String line2) {
		this.line2 = line2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getWebsiteUrl() {
		return websiteUrl;
	}

	public void setWebsiteUrl(String websiteUrl) {
		this.websiteUrl = websiteUrl;
	}

	public String getPhone1() {
		return phone1;
	}

	public void setPhone1(String phone1) {
		this.phone1 = phone1;
	}

	public String getPhone2() {
		return phone2;
	}

	public void setPhone2(String phone2) {
		this.phone2 = phone2;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
}
