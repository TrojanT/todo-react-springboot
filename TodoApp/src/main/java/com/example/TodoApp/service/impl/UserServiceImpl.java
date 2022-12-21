package com.example.TodoApp.service.impl;

import com.example.TodoApp.dto.UserDTO;
import com.example.TodoApp.entity.User;
import com.example.TodoApp.repository.UserRepo;
import com.example.TodoApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public String signupUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getId(),
                userDTO.getUserName(),
                userDTO.getPassword(),
                userDTO.getEmail()
        );
        userRepo.save(user);
        return user.getUserName();
    }
}
