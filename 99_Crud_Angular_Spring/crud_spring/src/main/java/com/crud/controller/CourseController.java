package com.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.model.Course;
import com.crud.repository.CourseRepository;

@RestController
@RequestMapping(path = "/api/course")
public class CourseController {
	
	@Autowired
	private CourseRepository repository;

	@GetMapping
	public List<Course> list() {
		
		return repository.findAll();
	}
	
}
