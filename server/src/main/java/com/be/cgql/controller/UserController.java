package com.be.cgql.controller;

import com.be.cgql.dto.UserDto;
import com.be.cgql.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @MutationMapping
    public UserDto createUser(@Argument UserDto user) {

        return userService.createUser(user);
    }

    @MutationMapping
    public UserDto updateUser(@Argument String id, @Argument UserDto user) {

        return  userService.updateUser(id, user);
    }

    @MutationMapping
    public UserDto deleteUser(@Argument String id) {

        return userService.deleteUser(id);
    }

    @QueryMapping(name = "user")
    public UserDto getUser(@Argument String id) {
        return  userService.getUserDtoById(id);
    }

    @QueryMapping(name = "allUsers")
    public List<UserDto> getAllUsers() {

        return userService.getAllUsersDto();
    }

}
