package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/test")
    public String test() {
        return "test 성공";
    }

    @GetMapping("/test2")
    public String test2() {
        return "test 실패";
    }
}
