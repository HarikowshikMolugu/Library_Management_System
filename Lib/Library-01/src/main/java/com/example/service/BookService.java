package com.example.service;

import java.util.List;

import com.example.model.Books;

public interface BookService {
	
	int registration(Books Book);

	List searchBookById(Long bookId);

	List searchBookByName(String bookName);
}
