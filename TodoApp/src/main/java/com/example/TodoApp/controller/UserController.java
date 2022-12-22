package com.example.TodoApp.controller;

import com.example.TodoApp.dto.UserDTO;
import com.example.TodoApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/signup")
    public String signupUser(@RequestBody UserDTO userDTO){
        String id = userService.signupUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public int login(@RequestBody UserDTO userDTO){
        int isAuth = userService.loginUser(userDTO);
        return isAuth;
    }
}
