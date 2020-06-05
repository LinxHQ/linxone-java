package com.linxone.webservice;

import com.linxone.webservice.security.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/apis")
public class BaseApi {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Autowired
    JwtProvider jwtProvider;


    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> signin(@RequestBody JwtRequest jwtRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        jwtRequest.getUsername(),
                        jwtRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwt((MyUserDetails) authentication.getPrincipal());
        JwtResponse jwtResponse = new JwtResponse(jwt);
        return new ResponseEntity<>(jwtResponse, HttpStatus.ACCEPTED);
    }
}
