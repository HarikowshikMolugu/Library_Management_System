package com.example.controllers;

import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Books;
import com.example.model.EmailRequest;
import com.example.service.BookService;

@RestController
public class BookController {

	@Autowired
	BookService bookservice;

	@PostMapping("/bookReg")
	public String bookReg(@RequestBody Books Book) {
		int i = bookservice.registration(Book);
		if (i > 0) {
			return "Book data inserted Sucessfully";
		} else {
			return "Book data not inserted";
		}
	}

	@GetMapping("/bookById/{bookId}")
	public List searchBookById(@PathVariable Long bookId) {
		return bookservice.searchBookById(bookId);

	}

	@GetMapping("/bookByName/{bookName}")
	public List searchBookByName(@PathVariable String bookName) {
		return bookservice.searchBookByName(bookName);
	}
	
	
	@PostMapping("/send")
	public String sendEmail(@RequestBody EmailRequest emailRequest) {
	    SimpleMailMessage s = new SimpleMailMessage();
	    s.setSubject(emailRequest.getSubject());
	    s.setTo(emailRequest.getTo());
	    s.setText(emailRequest.getBody());

	    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	    mailSender.setHost("smtp.gmail.com");
	    mailSender.setPort(587);
	    mailSender.setUsername("routhushyammukta29@gmail.com");
	    mailSender.setPassword("jdseaoqezybpvqfd");

	    Properties props = mailSender.getJavaMailProperties();
	    props.put("mail.transport.protocol", "smtp");
	    props.put("mail.smtp.auth", "true");
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.debug", "true");

	    mailSender.send(s);

	    return "Email sent successfully!";
	}
}
