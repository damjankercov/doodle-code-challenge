package com.txservices.interview.controller;

import com.txservices.interview.model.MessageModel;
import com.txservices.interview.repository.MessageRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

import javax.annotation.Resource;

@RestController
@RequestMapping(value = "/messages")
@CrossOrigin
public class MessageController {

    private final String CREATED_AT = "createdAt";

    @Resource
    private MessageRepository messageRepository;

    @PostMapping
    public void newMessage(@RequestBody final MessageModel newMessage) {
        messageRepository.save(newMessage);
    }

    @GetMapping
    public Collection<MessageModel> findAll() {
        return messageRepository.findAll(new Sort(Sort.Direction.ASC, CREATED_AT));
    }
}