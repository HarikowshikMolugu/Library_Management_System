package com.example.service.impl;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.enu.BookStatus;
import com.example.enu.Branch;
import com.example.model.Books;
import com.example.service.BookService;
@Service
public class BooksServiceImplementation implements BookService {
	@Autowired
	JdbcTemplate jdbc;
	
	public int registration(Books Book) {
	     String bookName= Book.getBookNmae();
	     String bookAuthor = Book.getBookAuthor();
	     BookStatus bookStatus = Book.getBookStatus();
	     String bookEdition = Book.getBookEdition();
	     String bookDesc = Book.getBookEdition();
	     Branch branch = Book.getBranch();

	     double bookCost = Book.getBookCost();
	     Date publishedDate = Book.getPublishedDate();
	     
	     String insertQuery = "insert into book(bookName,bookAuthor,bookStatus,bookEdition,bookDesc,branch,bookCost,publishedDate) values (?,?,?,?,?,?,?,?,?)";
	     int i=jdbc.update(insertQuery,bookName,bookAuthor,bookStatus.toString(),bookEdition,bookDesc,branch.toString(),bookCost,publishedDate);
	     return i;
	}
    
	public List searchBookById(Long bookId) {
		 List<Map<String, Object>> data = new ArrayList<>();
		   String sql = "select * from book where bookId=?";
		   data = jdbc.queryForList(sql,bookId);

		   List<Object> resultList = new ArrayList<>();
		   for (Map<String, Object> rowData : data) {
		       resultList.add(rowData);
		   }

		   return resultList;
	
	}
	
	public List searchBookByName(String bookName) {
		 List<Map<String, Object>> data = new ArrayList<>();
		   String sql = "select * from book where bookName=?";
		   data = jdbc.queryForList(sql,bookName);

		   List<Object> resultList = new ArrayList<>();
		   for (Map<String, Object> rowData : data) {
		       resultList.add(rowData);
		   }

		   return resultList;
	
	}
	
	
}
