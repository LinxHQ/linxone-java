package com.linxone.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "lb_customer_contacts")
public class CustomerContact implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lb_record_primary_key")
    private int id;

    @ManyToOne
    @JoinColumn(name = "lb_customer_id")
    private Customer customer;

    @Column(name = "lb_customer_contact_first_name")
    private String firstName;

    @Column(name = "lb_customer_contact_last_name")
    private String lastName;

    @Column(name = "lb_customer_contact_office_phone")
    private String officePhone;

    @Column(name = "lb_customer_contact_office_fax")
    private String officeFax;

    @Column(name = "lb_customer_contact_mobile")
    private String mobie;

    @Column(name = "lb_customer_contact_email_1")
    private String email1;

    @Column(name = "lb_customer_contact_email_2")
    private String email2;

    @Column(name = "lb_customer_contact_note")
    private String note;

    public CustomerContact() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getOfficePhone() {
        return officePhone;
    }

    public void setOfficePhone(String officePhone) {
        this.officePhone = officePhone;
    }

    public String getOfficeFax() {
        return officeFax;
    }

    public void setOfficeFax(String officeFax) {
        this.officeFax = officeFax;
    }

    public String getMobie() {
        return mobie;
    }

    public void setMobie(String mobie) {
        this.mobie = mobie;
    }

    public String getEmail1() {
        return email1;
    }

    public void setEmail1(String email1) {
        this.email1 = email1;
    }

    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
