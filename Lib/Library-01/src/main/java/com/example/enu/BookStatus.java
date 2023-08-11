package com.example.enu;

public enum BookStatus {
     AVAILABLE("AVAILABLE"),
     UNAVAILABLE("UNAVAILABLE");
     
     private final String value;

	BookStatus(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}


