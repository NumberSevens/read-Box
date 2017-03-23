package com.nigel.readbox.dao;

import com.nigel.readbox.entity.BookComment;
import org.springframework.stereotype.Repository;

@Repository
public interface BookCommentMapper {

    int deleteByPrimaryKey(Integer id);

    int insert(BookComment record);

    int insertSelective(BookComment record);

    BookComment selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(BookComment record);

    int updateByPrimaryKey(BookComment record);
}