package com.example.graphqlapi.repository;

import com.example.graphqlapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
