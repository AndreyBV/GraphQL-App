package com.be.cgql.controller;

import com.be.cgql.dto.PostDto;
import com.be.cgql.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//@RestController
//@RequestMapping("/post")
@Controller
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

//    @PostMapping
//    @MutationMapping
//    public PostDto createPost(@RequestBody PostDto postDto) {
//        return postService.createPost(postDto);
//    }
//
//    @GetMapping(value = "/{id}")
//    @QueryMapping
//    public PostDto getPost(@PathVariable String id) {
//        return  postService.getPostDtoById(id);
//    }

    @MutationMapping
    public PostDto createPost(@Argument PostDto postDto) {
        return postService.createPost(postDto);
    }

    @QueryMapping
//    @SchemaMapping(typeName = "Query")
    public PostDto getPost(@Argument String id) {
        return  postService.getPostDtoById(id);
    }



}
