package com.keerthana.demo.serviceimpl;

import com.keerthana.demo.model.Register;

import com.keerthana.demo.repo.RegisterRepo;

import com.keerthana.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Registerimpl implements RegisterService {

    @Autowired
    private RegisterRepo userRepository;

   

	public String addUser(Register user) {
		if(user!=null) {
			userRepository.save(user);
		return "User added";
		}else {
			return "not added";
		}
	}

	public Register getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public List<Register> getAllUsers() {
		return userRepository.findAll();
	}

	
}

