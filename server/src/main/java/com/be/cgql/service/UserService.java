package com.be.cgql.service;

import com.be.cgql.dto.UserDto;
import com.be.cgql.dto.converter.UserDtoConverter;
import com.be.cgql.entity.UserEntity;
import com.be.cgql.exception.NotFoundException;
import com.be.cgql.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private  final UserRepository userRepository;

    @Transactional
    public UserDto createUser(UserDto userDto) {
        UserEntity userEntity = UserDtoConverter.convertDtoToEntity(userDto);

        userEntity = userRepository.save(userEntity);

        return  UserDtoConverter.convertEntityToDto(userEntity);
    }

    @Transactional
    public UserDto updateUser(String uuid, UserDto userDto) {
        UserEntity userEntity = getUserEntityById(uuid);

        userEntity.setNickname(userDto.getNickname());
        userEntity.setEmail(userDto.getEmail());
        userEntity = userRepository.save(userEntity);

        return UserDtoConverter.convertEntityToDto(userEntity);
    }

    @Transactional
    public UserDto deleteUser(String uuid) {
        UserEntity userEntity = getUserEntityById(uuid);
        userRepository.deleteById(uuid);

        return UserDtoConverter.convertEntityToDto(userEntity);
    }

    @Transactional(readOnly = true)
    public List<UserDto> getAllUsersDto() {
        List<UserEntity> usersEntity = getAllUsersEntity();
        List<UserDto> usersDto = new ArrayList<UserDto>();
        usersEntity.forEach(userEntity -> usersDto.add(UserDtoConverter.convertEntityToDto(userEntity)));

        return usersDto;
    }

    @Transactional(readOnly = true)
    public List<UserEntity> getAllUsersEntity() {
        return  userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public UserDto getUserDtoById(String uuid) {
        UserEntity userEntity = getUserEntityById(uuid);

        return UserDtoConverter.convertEntityToDto(userEntity);
    }

    @Transactional(readOnly = true)
    public UserEntity getUserEntityById(String uuid) {
        return userRepository.findById(uuid)
                .orElseThrow(() -> new NotFoundException("User with id " + uuid + " not found"));
    }

}
