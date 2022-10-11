package com.be.cgql.controller.rest;

import com.be.cgql.dto.PostDto;
import com.be.cgql.service.rest.PostServiceRest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostControllerRest {

    private final PostServiceRest postService;

    @PostMapping
    public PostDto createPost(@RequestBody PostDto postDto) {
        return postService.createPost(postDto);
    }

    @GetMapping(value = "/{id}")
    public PostDto getPost(@PathVariable String id) {
        return  postService.getPostDtoById(id);
    }




}
