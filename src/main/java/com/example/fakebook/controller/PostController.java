package com.example.fakebook.controller;

import com.example.fakebook.dto.SignUpDto;
import com.example.fakebook.dto.UserDto;
import com.example.fakebook.model.Post;
import com.example.fakebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/getAllPosts")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping("/savePost")
    public ResponseEntity<Post> save(@RequestBody Post postBody) {
        Post post = postService.savePost(postBody);
        System.out.println(postBody);
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }


}
