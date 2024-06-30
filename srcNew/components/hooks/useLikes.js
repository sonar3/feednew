import { useState } from 'react';
// import axios from 'axios';

export function useLikes() {
	const [isLikes, setIsLikes] = useState(false);

    const newLikesState = !isLikes;
    const action = newLikesState ? 'likes' : 'unlikes';
	const toggleLikes = async () => {

		// test mbid
		// let data = JSON.stringify({
		// 	"mb-id": "diwngus@naver.com"
		// });

		// try {
		// 	const response = await axios.post(
		// 		`https://api.vastyle.co.kr/celeb/follow/${followMbId}/${action}`,
		// 		data, 
		// 		{ headers: {} }
		// 	);
		
		// 	if (response.status !== 200) {
		// 		throw new Error('네트워크 응답 실패');
		// 	}
		
			setIsLikes(newLikesState);
		
		// } catch (error) {
		// 	console.error('팔로우 상태를 업데이트하지 못했습니다:', error);
		// }
        
	};
	
    const handleDoubleClick = (e) => {
        setIsLikes(newLikesState);
    };


	return [isLikes, toggleLikes, handleDoubleClick];
}





