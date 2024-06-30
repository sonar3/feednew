import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export const useComments = (feedId) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/feed/list-comment?feed_id=${feedId}`);
      const commentData = response.data.data.comment;
      const commentsArray = Object.entries(commentData)
        .filter(([key]) => key !== 'count')
        .map(([_, value]) => value);
      setComments(commentsArray);
    } catch (err) {
      console.error("댓글 불러오기 오류:", err);
      setError("댓글을 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }, [feedId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const createComment = useCallback(async (content) => {
    try {
      const formData = new FormData();
      formData.append("feed_id", feedId);
      formData.append("comment_content", content);
      

      await axios.post(`${API_BASE_URL}/feed/create-comment`, formData);
      fetchComments();
    } catch (err) {
      console.error('댓글 생성 오류:', err);
      setError('댓글 작성에 실패했습니다. 다시 시도해 주세요.');
    }
  }, [feedId, fetchComments]);

  const modifyComment = useCallback(async (comment, newText) => {
    try {
      const formData = new FormData();
      formData.append("me_id", comment.me_id);
      formData.append("feed_id", feedId);
      formData.append("comment_content", newText);
      

      await axios.post(`${API_BASE_URL}/feed/update-comment`, formData);
      fetchComments();
    } catch (err) {
      console.error('댓글 수정 오류:', err);
      setError('댓글 수정에 실패했습니다. 다시 시도해 주세요.');
    }
  }, [feedId, fetchComments]);

  const deleteComment = useCallback(async (comment) => {
    if (!window.confirm("삭제 하시겠습니까?")) return;

    try {
      const formData = new FormData();
      formData.append("me_id", comment.me_id);
      formData.append("feed_id", feedId);
      // 데이터 추가

      await axios.post(`${API_BASE_URL}/feed/delete-comment`, formData);
      fetchComments();
    } catch (err) {
      console.error('댓글 삭제 오류:', err);
      setError('댓글 삭제에 실패했습니다. 다시 시도해 주세요.');
    }
  }, [feedId, fetchComments]);

  return { comments, error, createComment, modifyComment, deleteComment };
};
