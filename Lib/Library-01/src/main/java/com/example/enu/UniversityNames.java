package com.example.enu;

public enum UniversityNames {
	AU("ANDHRA UNIVERSITY"), ANU("ACHARYA_NAGARJUNA UNIVERSITY"), GU("GUNTUR UNIVERSITY"),
	AVU("SRI VENKATESWARA UNIVERSITY"), ANN("ADIKAVI_NANNAYA_UNIVERSITY");

	private final String value;

	UniversityNames(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}
}
