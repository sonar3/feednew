import { useState } from 'react';
import axios from 'axios';

export function useFollow(initialState = false, followMbId, mbId) {
	const [isFollowing, setIsFollowing] = useState(initialState);

	const toggleFollow = async () => {
		const newFollowState = !isFollowing;
		const action = newFollowState ? 'follow' : 'unfollow';

		// test mbid
		let data = JSON.stringify({
			"mb-id": "diwngus@naver.com"
		});

		try {
			const response = await axios.post(
				`https://api.vastyle.co.kr/celeb/follow/${followMbId}/${action}`,
				data, 
				{ headers: {} }
			);
		
			if (response.status !== 200) {
				throw new Error('네트워크 응답 실패');
			}
		
			setIsFollowing(newFollowState);
			
		} catch (error) {
			console.error('팔로우 상태를 업데이트하지 못했습니다:', error);
		}
	};
	
	return [isFollowing, toggleFollow];
}





