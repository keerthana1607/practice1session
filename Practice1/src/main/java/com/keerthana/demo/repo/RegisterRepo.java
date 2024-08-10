package com.keerthana.demo.repo;

import com.keerthana.demo.model.Register;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepo extends JpaRepository<Register, Integer> {
  
   
   @Query(value = "SELECT u FROM Register u WHERE u.email = :email")
   public Register findByEmail(@Param("email") String email);
}
