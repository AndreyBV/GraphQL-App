package com.be.cgql.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "post")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {

    @Id
    @Column(name = "id")
    private String uuid;

    @Column
    private String title;

    @Column
    private String description;

}
