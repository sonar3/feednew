import React, { useState } from 'react'
import styles from './HeaderSearch.module.css'

import icoBasket from '../../assets/images/ico_basket.svg';
import icoSearch from '../../assets/images/ico_search.svg';

export default function HeaderSearch() {
	const [searchText, setSearchText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		window.location.href = `https://vastyle.co.kr/shop_new/search_renew.php?stx=${searchText}#byFeed`;
	}

	return (
		<div className={styles.header_search}>
			<form onSubmit={handleSubmit}>
				<div className={styles.header_search__input}>
					<input 
						type="text" 
						placeholder="검색어를 입력하세요" 
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button type='submit' className={styles.header_search__bttn}>
						<img src={icoSearch} alt='검색하기' />
					</button>
				</div>
			</form>
			<a href='https://vastyle.co.kr/shop_new/cart.php' className={styles.bttn_basket}>
				<img src={icoBasket} alt='장바구니' />
			</a>
		</div>
	)
}