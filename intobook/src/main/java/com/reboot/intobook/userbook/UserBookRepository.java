package com.reboot.intobook.userbook;

import com.reboot.intobook.book.Book;
import com.reboot.intobook.user.entity.User;
import com.reboot.intobook.userbook.entity.UserBook;
import com.reboot.intobook.userbook.entity.UserBookStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBookRepository extends JpaRepository<UserBook, Long> {
    UserBook findByUserAndBook(User user, Book book);

    UserBook findByUserAndBookIsbn(User user, String isbn);
    Page<UserBook> findByUserAndIsDeletedFalse(User user, Pageable pageable);
    List<UserBook> findByUserUserPk(Long userPk);
    Page<UserBook> findByUserAndStatusIn(User user, UserBookStatus[] statuses, Pageable pageable);
    List<UserBook> findAllByUserAndStatus(User user, UserBookStatus userBookStatus);


}
