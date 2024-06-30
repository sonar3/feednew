import { transform } from 'framer-motion';
import { useState, useCallback } from 'react';

export const usePopup = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	const openPopup = useCallback((popupContent) => {
		setIsOpen(true);
		setContent(popupContent);
		document.body.classList.add('popup-open');
	}, []);

	const closePopup = useCallback(() => {
		const feedView = document.querySelector(".feedView");
		feedView.style.transition = "all .5s ease";
		feedView.style.transform = "translateY(100%)";
		setTimeout(() => {
			setIsOpen(false);
			setContent(null);
			document.body.classList.remove('popup-open');
		}, 400);
	}, []);

	return {
		isOpen,
		content,
		openPopup,
		closePopup
	};
};
