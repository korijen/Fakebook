package com.example.fakebook.service;

import com.example.fakebook.model.Post;
import com.example.fakebook.model.UserComment;
import com.example.fakebook.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public UserComment saveComment(UserComment comment) {
        return commentRepository.save(comment);
    }

    public List<UserComment> getAllComments() {
        return commentRepository.findAll();
    }
}
