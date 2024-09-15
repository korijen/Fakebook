package com.example.fakebook.controller;

import com.example.fakebook.model.Post;
import com.example.fakebook.model.UserComment;
import com.example.fakebook.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/getAllComments")
    public List<UserComment> getAllComments(){ return commentService.getAllComments();}

    @PostMapping("/saveComment")
    public ResponseEntity<UserComment> save(@RequestBody UserComment commentBody) {
        UserComment comment = commentService.saveComment(commentBody);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }
}
