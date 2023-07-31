package com.reboot.intobook.user.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_pk")
    private Long userPk;

    @Column(name = "social_id")
    private String socialId;

    private String nickname;

    private String email;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_admin")
    @Enumerated(EnumType.STRING)
    private IsAdmin isAdmin;

    @Column(name = "refresh_token")
    private String refreshToken;

//    @Column(name = "user_book")
//    @OneToMany(mappedBy = "user")
//    private List<UserBook> userBook = new ArrayList<>();

    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }

}
