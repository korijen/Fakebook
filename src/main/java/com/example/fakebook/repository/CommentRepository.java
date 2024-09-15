package com.example.fakebook.repository;

import com.example.fakebook.model.UserComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository  extends JpaRepository<UserComment, Integer> {
}
