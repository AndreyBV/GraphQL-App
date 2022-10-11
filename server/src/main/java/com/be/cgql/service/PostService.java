package com.be.cgql.service;


import com.be.cgql.dto.PostDto;
import com.be.cgql.dto.converter.PostDtoConverter;
import com.be.cgql.entity.PostEntity;
import com.be.cgql.exception.NotFoundException;
import com.be.cgql.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    @Transactional
    public PostDto createPost(PostDto postDto) {
        PostEntity postEntity = PostDtoConverter.convertDtoToEntity(postDto);

        postEntity = postRepository.save(postEntity);

        return  PostDtoConverter.convertEntityToDto(postEntity);
    }

    @Transactional
    public PostDto updatePost(String uuid, PostDto postDto) {
        PostEntity postEntity = getPostEntityById(uuid);

        postEntity.setTitle(postDto.getTitle());
        postEntity.setDescription(postDto.getDescription());
        postEntity = postRepository.save(postEntity);

        return  PostDtoConverter.convertEntityToDto(postEntity);
    }

    @Transactional
    public PostDto deletePost(String uuid) {
        PostEntity postEntity = getPostEntityById(uuid);
        postRepository.deleteById(uuid);

        return PostDtoConverter.convertEntityToDto(postEntity);
    }

    @Transactional(readOnly = true)
    public  List<PostDto> getAllPostsDto() {
        List<PostEntity> postsEntity = getAllPostsEntity();
        List<PostDto> postsDto = new ArrayList<PostDto>();
        postsEntity.forEach(postEntity -> postsDto.add(PostDtoConverter.convertEntityToDto(postEntity)));

        return postsDto;
    }

    @Transactional(readOnly = true)
    public List<PostEntity> getAllPostsEntity() {
        return  postRepository.findAll();
//                .orElseThrow(() -> new PostNotFoundException("Post with id " + uuid + " not found"));
    }

    @Transactional(readOnly = true)
    public PostDto getPostDtoById(String uuid) {
        PostEntity postEntity = getPostEntityById(uuid);

        return PostDtoConverter.convertEntityToDto(postEntity);
    }

    @Transactional(readOnly = true)
    public PostEntity getPostEntityById(String uuid) {
        return  postRepository.findById(uuid)
                .orElseThrow(() -> new NotFoundException("Post with id " + uuid + " not found"));
    }
}

