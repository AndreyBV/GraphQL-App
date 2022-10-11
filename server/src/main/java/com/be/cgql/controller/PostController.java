package com.be.cgql.controller;

import com.be.cgql.dto.PostDto;
import com.be.cgql.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.List;

//@RestController
//@RequestMapping("/post")
@Controller
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

//    @Secured("ROLE_USER")
    @MutationMapping
    public PostDto createPost(@Argument PostDto post) {

        return postService.createPost(post);
    }

    @MutationMapping
    public PostDto updatePost(@Argument String id, @Argument PostDto post) {

        return postService.updatePost(id, post);
    }

    @MutationMapping
    public PostDto deletePost(@Argument String id) {

        return postService.deletePost(id);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @QueryMapping(name = "post")
    public PostDto getPost(@Argument String id) {

        return  postService.getPostDtoById(id);
    }

    @QueryMapping(name = "allPosts")
    public List<PostDto> getAllPosts() {

        return  postService.getAllPostsDto();
    }


}
