import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedItemReply.module.css';
import DOMPurify from 'dompurify';
import reply_more from '../../assets/images/reply_more.svg';

export const ReplyItem = ({ comment, onModify, onDelete }) => {
  const [isModifyOpen, setIsModifyOpen] = useState(false);
  const [isModifyBtn, setIsModifyBtn] = useState(false);
  const [modifiedText, setModifiedText] = useState(comment.me_memo);

  const toggleModifyButton = useCallback(() => {
    setIsModifyOpen(!isModifyOpen);
  }, [isModifyOpen]);

  const handleModify = useCallback(() => {
    onModify(comment, modifiedText);
    setIsModifyOpen(false);
    setIsModifyBtn(false);
  }, [comment, modifiedText, onModify]);

  const handleModifyBtn = useCallback(() => {
    setIsModifyBtn(true);
    setIsModifyOpen(false);
  }, []);

  const handleDeleteBtn = useCallback(() => {
    onDelete(comment);
  }, [comment, onDelete]);

  return (
    <div className={styles.reply_list_item} data-key={comment.me_id}>
      <div className={styles.reply_list_info}>
        <div className={styles.reply__image} >
          <img src={comment.member_image || "https://vastyle.co.kr/img/no_profile.png"} alt={`${comment.nickname}'s profile`} />
        </div>
        <div>
          <div className={styles.reply__nickname}>{comment.nickname}</div>
          <div className={styles.reply_list_content}>
            {isModifyBtn ? (
              <>
                <textarea 
                  value={modifiedText} 
                  onChange={(e) => setModifiedText(e.target.value)}
                  aria-label="댓글 수정"
                />
                <div className={styles.reply_edit_group}>
                  <button type='button' className={styles.reply_bttn_cancel} onClick={() => setIsModifyBtn(false)}>취소</button>
                  <button type='button' className={styles.reply_bttn_modify} onClick={handleModify}>수정</button>  
                </div>
              </>
            ) : (
              <p>{DOMPurify.sanitize(comment.me_memo)}</p>
            )}
          </div>
          <button type='button' className={styles.reply_list_bttn_reply} aria-label="답글 달기">답글 달기</button>
        </div>
        <div className={styles.reply__util}>
          <span className={styles.reply__datetime}>{comment.write_datetime}</span>
          <button type='button' className={styles.reply__modify} onClick={toggleModifyButton} aria-label="댓글 수정">
            <img src={reply_more} alt="수정 삭제" />
          </button>
          {isModifyOpen && (
            <div className={styles.reply__modify_bttn}>  
              <button type='button' onClick={handleModifyBtn}>수정하기</button>
              <button type='button' onClick={handleDeleteBtn}>삭제하기</button>
            </div>
          )}
        </div>
      </div>
      {comment.reply && comment.reply.length > 0 && (
        <div className={`${styles.reply_list_item} ${styles.reply_list_item__reply}`}>
          {comment.reply.map((reply) => (
            <ReplyItem key={reply.me_id} comment={reply} onModify={onModify} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

ReplyItem.propTypes = {
  comment: PropTypes.shape({
    me_id: PropTypes.string.isRequired,
    member_image: PropTypes.string,
    nickname: PropTypes.string.isRequired,
    me_memo: PropTypes.string.isRequired,
    write_datetime: PropTypes.string.isRequired,
    reply: PropTypes.array,
  }).isRequired,
  onModify: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
