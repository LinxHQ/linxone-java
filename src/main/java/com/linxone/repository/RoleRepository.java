package com.linxone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.linxone.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{
	Role findByName(String name);
}
