package com.example.fakebook.service;

import com.example.fakebook.model.Post;
import com.example.fakebook.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        List<Post> allPosts = postRepository.findAll();
        Collections.reverse(allPosts);
        return allPosts;
    }
}
