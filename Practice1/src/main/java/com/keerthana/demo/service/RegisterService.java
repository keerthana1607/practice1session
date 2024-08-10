package com.keerthana.demo.service;


import com.keerthana.demo.model.Register;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface RegisterService {
    
    Register getUserByEmail(String email);
    List<Register> getAllUsers();
	String addUser(Register user);
}
