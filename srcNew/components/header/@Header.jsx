import React from 'react'
import HeaderSearch from './HeaderSearch'

import styles from './Header.module.css'
import icoSort from '../../assets/images/ico_sort.svg';

export default function Header() {
  return (
	<header style={{ maxWidth:"480px", margin: "0 auto" }}>
		<HeaderSearch />
		
		<nav className={styles.header_nav}>
			<a href="javascript:;" className={styles.header_nav__active}><span>전체</span></a>
			<a href="javascript:;">팔로잉</a>
			<a href="javascript:;">우먼</a>
			<a href="javascript:;">맨</a>
			<a href="javascript:;">5월의 탑셀럽</a>
		</nav>
		<div className={styles.header_favorite}>
			<p>
				나의관심 <img src="https://vastyle.co.kr/va/src/feed/images/ico_favorite.png" width={15} alt="" />
			</p>
		</div>
		<ul className={styles.header_tags}>
			<li>#트렌드컬러</li>
			<li>#하객룩</li>
			<li>#인디슬리즈</li>
			<li>#올드머니</li>
			<li>#고프코어</li>
		</ul>
		<div className={styles.header_util}>
			<div className={styles.header_ranking}>
				<span className={styles.header_ranking___tit}>셀럽랭킹</span>
				<span className={styles.header_ranking___rank}>1</span>
				<span className={styles.header_ranking___aka}>hx_jiv</span>
			</div>
			<div className={styles.header_sort}>
				<img src={icoSort} />추천순 | 최신순</div>
		</div>
	</header>
  )
}
