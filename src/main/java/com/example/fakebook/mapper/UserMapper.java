package com.example.fakebook.mapper;

import com.example.fakebook.dto.SignUpDto;
import com.example.fakebook.dto.UserDto;
import com.example.fakebook.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}
