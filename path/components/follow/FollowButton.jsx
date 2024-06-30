import React from 'react';
import styles from './FollowButton.module.css'

export default function FollowButton({ isFollowing, toggleFollow }) {
	
	return (
		<button type="button" className={`${styles.btn_follow} ${isFollowing ? styles.is_following : ''}`} onClick={toggleFollow}>
			{isFollowing ? '팔로잉' : '팔로우'}
		</button>
	);
}