package com.be.cgql.dto.converter;

import com.be.cgql.dto.PostDto;
import com.be.cgql.entity.PostEntity;

import java.util.UUID;

public class PostDtoConverter {

    public static PostEntity convertDtoToEntity(PostDto dto) {
        PostEntity postEntity = new PostEntity();

        postEntity.setUuid(UUID.randomUUID().toString());
        postEntity.setTitle(dto.getTitle());
        postEntity.setDescription(dto.getDescription());

        return postEntity;
    }

    public static  PostDto convertEntityToDto(PostEntity postEntity) {
        PostDto postDto = new PostDto();

        postDto.setId(postEntity.getUuid());
        postDto.setTitle(postEntity.getTitle());
        postDto.setDescription(postEntity.getDescription());

        return postDto;
    }
}
