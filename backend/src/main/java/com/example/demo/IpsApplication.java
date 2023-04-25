package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class IpsApplication {

	@RequestMapping("/")	
	public String hello() {		
		return "Hello World!";
	}	
    
	public static void main(String[] args) {
		SpringApplication.run(IpsApplication.class, args );
	}
}