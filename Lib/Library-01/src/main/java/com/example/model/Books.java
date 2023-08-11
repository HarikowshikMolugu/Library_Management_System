package com.example.model;

import java.sql.Date;

import com.example.enu.BookStatus;
import com.example.enu.Branch;

public class Books {
	
	private long bookId;
	private String bookNmae;
	private String bookAuthor;
	private BookStatus bookStatus;
	private String bookEdition;
	private String bookDesc;
	private Branch branch;
	private byte[] bookImage;
	private double bookCost;
	private Date publishedDate;
	public long getBookId() {
		return bookId;
	}
	public void setBookId(long bookId) {
		this.bookId = bookId;
	}
	public String getBookNmae() {
		return bookNmae;
	}
	public void setBookNmae(String bookNmae) {
		this.bookNmae = bookNmae;
	}
	public String getBookAuthor() {
		return bookAuthor;
		
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}

	public BookStatus getBookStatus() {
		return bookStatus;
	}
	public void setBookStatus(BookStatus bookStatus) {
		this.bookStatus = bookStatus;
	}
	public String getBookEdition() {
		return bookEdition;
	}
	public void setBookEdition(String bookEdition) {
		this.bookEdition = bookEdition;
	}
	public String getBookDesc() {
		return bookDesc;
	}
	public void setBookDesc(String bookDesc) {
		this.bookDesc = bookDesc;
	}
	public Branch getBranch() {
		return branch;
	}
	public void setBranch(Branch branch) {
		this.branch = branch;
	}
	public byte[] getBookImage() {
		return bookImage;
	}
	public void setBookImage(byte[] bookImage) {
		this.bookImage = bookImage;
	}
	public double getBookCost() {
		return bookCost;
	}
	public void setBookCost(double bookCost) {
		this.bookCost = bookCost;
	}
	public Date getPublishedDate() {
		return publishedDate;
	}
	public void setPublishedDate(Date publishedDate) {
		this.publishedDate = publishedDate;
	}

}
