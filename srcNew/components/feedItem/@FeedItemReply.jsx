import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedItemReply.module.css';
import DOMPurify from 'dompurify';
import { useComments } from '../../hooks/useComments';
import { ReplyItem } from './ReplyItem';
import { API_BASE_URL } from '../../config';

const FeedItemReply = ({ feedId }) => {
  const [replyText, setReplyText] = useState('');
  const { comments, error, createComment, modifyComment, deleteComment } = useComments(feedId);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (replyText.trim() === '') return;
    createComment(replyText);
    setReplyText('');
  }, [replyText, createComment]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.reply_container}>
      {comments.map((comment) => (
        <ReplyItem 
          key={comment.me_id} 
          comment={comment} 
          onModify={modifyComment}
          onDelete={deleteComment}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <div className={styles.reply}>
          <input 
            type="text" 
            className={styles.reply_input} 
            value={replyText} 
            onChange={(e) => setReplyText(e.target.value)} 
            placeholder='댓글로 셀럽과 자유롭게 소통하세요.'
            aria-label="댓글 작성하기"
          />
          <button type="submit" className={styles.reply_button}>게시</button>
        </div>        
      </form>
    </div>
  );
};

FeedItemReply.propTypes = {
  feedId: PropTypes.string.isRequired,
};

export default FeedItemReply;
