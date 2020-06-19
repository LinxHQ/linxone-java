//package com.linxone.config;
//
//import com.linxone.webservice.security.JwtTokenFilter;
//import com.linxone.webservice.security.JwtTokenProvider;
//import com.linxone.webservice.security.MyUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	@Autowired
//	JwtTokenProvider jwtTokenProvider;
//	@Autowired
//	MyUserDetailsService appUserDetailService;
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(appUserDetailService).passwordEncoder(passwordEncoder());
//	}
//
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.cors().and().csrf().disable();
//		http.authorizeRequests()
//			.antMatchers("/admin/**").hasRole("ADMIN")
//			.antMatchers("/").hasRole("USER")
//			.antMatchers("/user/**").hasRole("USER")
//				.antMatchers("/api/**").hasRole("USER")
//			.and().formLogin();
//		http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
//
//		http.authorizeRequests()
//                .antMatchers("/apis/customer/create").hasRole("ADMIN")
//                .antMatchers("/apis/customer").hasRole("USER")
//				.antMatchers("/apis/address").hasRole("ADMIN")
//                .antMatchers("/apis/signin").permitAll();
//
//
//	}
//
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder() ;
//	}
//
//	@Override
//    @Bean
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }
//
//
//}
