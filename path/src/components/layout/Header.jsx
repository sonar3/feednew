import React, { createContext, useContext } from 'react';

import HeaderSearch from '../header/HeaderSearch'

import styles from '../header/Header.module.css'

import { Link, useLocation } from 'react-router-dom';


const DataContext = createContext();

export const DataProvider = ({ children, value }) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};

export default function Header(data) {

	const location = useLocation();
	// console.log(data);

  return (
	<header style={{ maxWidth:"480px", margin: "0 auto" }}>
		<HeaderSearch />
		<nav className={styles.header_nav}>
			<Link to="/" className={location.pathname === '/' ? styles.header_nav__active : ''}>
				<span>전체</span>
			</Link>
			<Link to="/follow" className={location.pathname === '/follow' ? styles.header_nav__active : ''}>
				<span>팔로잉</span>
			</Link>
			<Link to="/woman" className={location.pathname === '/woman' ? styles.header_nav__active : ''}>
				<span>우먼</span>
			</Link>
			<Link to="/men" className={location.pathname === '/men' ? styles.header_nav__active : ''}>
				<span>맨</span>
			</Link>
			<Link to="https://vastyle.co.kr/pages_new/magazine_exhibition_detail.php?bn_id=379">
				<span>5월의 탑셀럽</span>
			</Link>
		</nav>
	</header>
  )
}