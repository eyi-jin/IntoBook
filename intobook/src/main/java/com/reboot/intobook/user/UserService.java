package com.reboot.intobook.user;

import com.reboot.intobook.user.entity.User;
import com.reboot.intobook.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static java.awt.SystemColor.info;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void updateNickname(Long userPk, String nickname) throws Exception{
        Optional<User> user = userRepository.findByUserPk(userPk);
        log.info("updateNickname실행");    
    
        if(user.isPresent()){
            User user1 = user.get();
            user1.setNickname(nickname);
            userRepository.saveAndFlush(user1);
        }else{
            throw new Exception("없으요");
        }
    }

}
