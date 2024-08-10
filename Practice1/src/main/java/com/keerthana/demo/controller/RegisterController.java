package com.keerthana.demo.controller;

import com.keerthana.demo.model.Register;

import com.keerthana.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping
	public String insertUser(@RequestBody Register user) {
		String msg = "";
		try {
			
			registerService.addUser(user);
			msg = "Success user";
		} catch (Exception e) {
			e.printStackTrace();
			msg = "Failure user";
		}
		return msg;
	}

	@GetMapping("/getEmail/{email}")
	public Register viewUserByEmail(@PathVariable("email") String email) {
		
		return registerService.getUserByEmail(email);
	}

	@GetMapping("/all")
	public List<Register> getUsers() {
		return registerService.getAllUsers();
	}
}

