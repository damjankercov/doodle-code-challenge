package com.txservices.interview.model;

import org.springframework.data.annotation.Id;

import lombok.Data;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
public class MessageModel {

    @Id
    public String id;
    private String user;
    private String content;
    private Date createdAt;

    public MessageModel(String user, String content) {
        this.user = user;
        this.content = content;
        this.createdAt = new Date();
    }

}
