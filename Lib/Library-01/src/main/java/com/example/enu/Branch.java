package com.example.enu;

public enum Branch {
	CSE("COMPUTER SCIENCE"), IT("INFORMATION TECHNOLOGY"), ME("MECHANICAL"), ECE("ELECTRONIC AND COMMUNICATION"),
	EEE("ELECTRICAL AND ELECTRONIC"), CE("CIVIL");

	private final String value;

	Branch(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
