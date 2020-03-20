package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{
	Address findById(int id);
}
