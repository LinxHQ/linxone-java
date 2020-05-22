//package com.linxone;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.event.ContextRefreshedEvent;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import com.linxone.entity.Role;
//import com.linxone.entity.Account;
//import com.linxone.repository.RoleRepository;
//import com.linxone.repository.AccountRepository;
//
//@Component
//public class Seeding implements ApplicationListener<ContextRefreshedEvent>{
//	@Autowired
//    private AccountRepository accountRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @Override
//    public void onApplicationEvent(ContextRefreshedEvent arg0) {
//
//        if (roleRepository.findByName("ROLE_ADMIN") == null) {
//            roleRepository.save(new Role("ROLE_ADMIN"));
//        }
//
//        if (roleRepository.findByName("ROLE_USER") == null) {
//            roleRepository.save(new Role("ROLE_USER"));
//        }
//
//        if (accountRepository.findByUsername("admin@admin.com") == null) {
//            Account admin = new Account();
//            admin.setUsername("admin@admin.com");
//            admin.setPassword(passwordEncoder.encode("Admin123"));
//            List<Role> roles = new ArrayList<>();
//            roles.add(roleRepository.findByName("ROLE_ADMIN"));
//            admin.setRoles(roles);
//            accountRepository.save(admin);
//        }
//
//        if (accountRepository.findByUsername("user@user.com") == null) {
//            Account user = new Account();
//            user.setUsername("user@user.com");
//            user.setPassword(passwordEncoder.encode("123456"));
//            List<Role> roles = new ArrayList<>();
//            roles.add(roleRepository.findByName("ROLE_USER"));
//            user.setRoles(roles);
//            accountRepository.save(user);
//        }
//    }
//}
