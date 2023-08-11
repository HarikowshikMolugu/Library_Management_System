package com.example.enu;

public enum Gender {
	M("MALE"), F("FEMALE"), T("TRANS");

	private final String value;

	Gender(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
