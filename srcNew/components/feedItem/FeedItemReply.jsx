import React, { useEffect, useState, useCallback } from 'react';
import styles from './FeedItemReply.module.css';
import axios from 'axios';
import DOMPurify from 'dompurify';

import reply_more from '../../assets/images/reply_more.svg';

const ReplyItem = ({ comment, onModify, onDelete }) => {
	const [isModifyOpen, setIsModifyOpen] = useState(false);
	const [isModifyBtn, setIsModifyBtn] = useState(false);
	const [modifiedText, setModifiedText] = useState(comment.me_memo);

	const toggleModifyButton = useCallback(() => {
		setIsModifyOpen(!isModifyOpen);
	}, [isModifyOpen]);

	const handleModify = () => {
		onModify(comment, modifiedText);
		setIsModifyOpen(false);
		setIsModifyBtn(false);
	};

	const handleModifyBtn = () => {
		setIsModifyBtn(true);
		setIsModifyOpen(false);
	};

	const handleDeleteBtn = () => {
		onDelete(comment);
	};

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
					<><textarea 
						value={modifiedText} 
						onChange={(e) => setModifiedText(e.target.value)}
						aria-label="댓글 수정"
					/>
					<div className={styles.reply_edit_group}>
						<button type='button' className={styles.reply_bttn_cancel} onClick={()=>(setIsModifyBtn(false))}>취소</button>
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
						{/* <button type='button' onClick={() => onDelete(comment.me_id)}>삭제하기</button> */}
						<button type='button' onClick={handleDeleteBtn}>삭제하기</button>
						{console.log(comment.me_id)}
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

export default function FeedItemReply({ feedId }) {
	const [data, setData] = useState([]);
	const [replyText, setReplyText] = useState('');
	const [error, setError] = useState(null);

	const fetchReplyData = useCallback(async () => {
		try {
			const response = await axios.get(`https://api.vastyle.co.kr/feed/list-comment?feed_id=${feedId}`);
			const commentData = response.data.data.comment;

			const comments = Object.entries(commentData)
			.filter(([key]) => key !== 'count')
			.map(([_, value]) => value);

			setData(comments);
			
		} catch (error) {
			console.error("댓글 불러오기 오류:", error);
			setError("댓글을 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
		}
  	}, [feedId]);

	useEffect(() => {
		fetchReplyData();
	}, [fetchReplyData]);

	const createComment = async (e) => {
		e.preventDefault();
		if (replyText.trim() === '') {
			setError('댓글 내용을 입력하세요.');
		return;
		}
		
		
		const formdata = new FormData(commentData);
		formdata.append("feed_id", commentData.feed_id);
		formdata.append("mb_id", commentData.mb_id);
		formdata.append("me_recv_mb_id", commentData.me_recv_mb_id);
		formdata.append("grand_parent_id", commentData.grand_parent_id);
		formdata.append("parent_id", commentData.parent_id);
		formdata.append("rewrite_target_id", commentData.rewrite_target_id);	
		formdata.append("comment_content", replyText);

		// console.log(comments.me_id)
		
		try {
			await axios.post(`https://api.vastyle.co.kr/feed/create-comment`, formdata);
			setReplyText('');
			fetchReplyData();
		} catch (error) {
			console.error('댓글 생성 오류:', error);
			setError('댓글 작성에 실패했습니다. 다시 시도해 주세요.');
		}
  };

	const handleModify = async (commentData,newText) => {
		const formdata = new FormData();		
		formdata.append("me_id", commentData.me_id);
		formdata.append("feed_id", commentData.me_id);
		formdata.append("mb_id", commentData.me_id);
		formdata.append("me_recv_mb_id", commentData.me_id);
		formdata.append("grand_parent_id", commentData.me_grandparents_id);
		formdata.append("comment_content", newText);

		try {
			const response = await axios.post(`https://api.vastyle.co.kr/feed/update-comment`, formdata);
			console.log('Server response:', response.data);
			
			if (response.status === 200) {
				fetchReplyData();
				alert("수정 됐습니다.");
			} else {
				console.error('댓글 수정 오류:', response.data);
				setError('댓글 수정에 실패했습니다. 다시 시도해 주세요.');
			}
			// alert("수정 됐습니다.");	
		} 
		catch (error) {
			console.error('댓글 수정 오류:', error);
			setError('댓글 수정에 실패했습니다. 다시 시도해 주세요.');
		}
  };

	const handleDelete = async (commentData) => {
		
		const replyDelete = window.confirm("삭제 하시겠습니까?");
		if (!replyDelete) {
			return;
		}

		const formdata = new FormData();
		formdata.append("me_id", commentData.me_id);
		formdata.append("feed_id", commentData.me_id);
		formdata.append("mb_id", commentData.me_id);
		formdata.append("me_recv_mb_id", commentData.me_id);
		formdata.append("grand_parent_id", commentData.me_grandparents_id);

		try {
			await axios.post(`https://api.vastyle.co.kr/feed/delete-comment`, formdata);
			fetchReplyData();
		} catch (error) {
			console.error('댓글 삭제 오류:', error);
			setError('댓글 삭제에 실패했습니다. 다시 시도해 주세요.');
		}
	};

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	return (
		<div className={styles.reply_container}>
			{data.map((comment) => (
				<ReplyItem 
					key={comment.me_id} 
					comment={comment} 
					onModify={handleModify}
					onDelete={handleDelete}
				/>
			))}

			<form onSubmit={createComment}>
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
}

