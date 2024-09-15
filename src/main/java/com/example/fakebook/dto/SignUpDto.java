package com.example.fakebook.dto;

public record SignUpDto (String firstName, String lastName, String login, char[] password) { }