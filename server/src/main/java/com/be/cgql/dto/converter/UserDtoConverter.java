package com.be.cgql.dto.converter;

import com.be.cgql.dto.UserDto;
import com.be.cgql.entity.UserEntity;

import java.util.UUID;

public class UserDtoConverter {

    public static UserEntity convertDtoToEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity();

        userEntity.setUuid(UUID.randomUUID().toString());
        userEntity.setNickname(userDto.getNickname());
        userEntity.setEmail(userDto.getEmail());

        return userEntity;
    }

    public static UserDto convertEntityToDto(UserEntity userEntity) {
        UserDto userDto = new UserDto();

        userDto.setId(userEntity.getUuid());
        userDto.setNickname(userEntity.getNickname());
        userDto.setEmail(userEntity.getEmail());

        return userDto;
    }

}
