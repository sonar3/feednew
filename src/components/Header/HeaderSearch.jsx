import React from 'react'
import styles from './HeaderSearch.module.css'

import icoBasket from '../../assets/ico_basket.svg';
import icoSearch from '../../assets/ico_search.svg';

export default function HeaderSearch() {
	return (
		<div className={styles.header_search}>
			<form action={`https://vastyle.co.kr/shop_new/search_renew.php?stx=${'text'}#byFeed`}>
				<div className={styles.header_search__input}>
					<input type="text" placeholder="" />
					<button type='button' className={styles.header_search__bttn}>
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
