package com.crud;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.crud.model.Course;
import com.crud.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(CourseRepository repository) {
		return args -> {
			repository.deleteAll();
			
			Course c = new Course();
			c.setName("Angular Com Spring");
			c.setCategory("Full-Stack");
			
			Course c2 = new Course();
			c2.setName("Angular");
			c2.setCategory("Front-End");
			
			Course c3 = new Course();
			c3.setName("Spring");
			c3.setCategory("Back-End");
			
			repository.save(c);
			repository.save(c2);
			repository.save(c3);
		};
	}

}
