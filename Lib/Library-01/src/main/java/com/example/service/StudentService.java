package com.example.service;

import java.util.List;
import java.util.Map;

import com.example.except.UserNotFoundException;
import com.example.model.LoginRequest;
import com.example.model.Student;

public interface StudentService {

	Map<String, Object> registration(Student student);

	Map<String, Object> login(LoginRequest loginRequest);

	List StudentById(String studentId);

	int passwordUpdate(String studentId, String password);

	List fullData();

}
