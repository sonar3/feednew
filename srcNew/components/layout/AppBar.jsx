import React, { useState, useEffect } from 'react';
import NavAppBar from '../nav/NavAppBar';

export default function AppBar() {
    const [scrollDirection, setScrollDirection] = useState('appbar-up');
	
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'appbar-down' : 'appbar-up';
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    return (
        <div className={`${"appbar"} ${scrollDirection === 'appbar-up' ? 'appbar-up' : 'appbar-down'}`}>
		<NavAppBar />
        </div>
    );
}