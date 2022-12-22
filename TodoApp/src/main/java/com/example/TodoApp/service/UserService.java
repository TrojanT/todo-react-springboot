package com.example.TodoApp.service;

import com.example.TodoApp.dto.UserDTO;

public interface UserService {

    String signupUser(UserDTO userDTO);

    int loginUser(UserDTO userDTO);
}
