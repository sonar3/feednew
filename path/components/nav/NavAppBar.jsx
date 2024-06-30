import React from 'react'
import styles from './NavAppBar.module.css'
import { Link } from 'react-router-dom'
import MenuIframe from '../../pages/MenuIframe'

export default function NavAppBar() {
	return (
		<nav className={styles.appbar}>
			<ul>
				<li className={styles.appbar_feed}>
					<Link to="https://vastyle.co.kr/va/feed/index.php">
						<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="30.625" height="30.625" fill="#F3F3F3"></rect>
							<path d="M14.4509 22.656L10.4005 26.0313V22.656H5V5.10425H26.6022V22.656H14.4509Z" stroke="#040404"></path>
							<path d="M14.676 7.80469L11.3007 19.0558" stroke="#040404" strokeLinejoin="round"></path>
							<path d="M20.3015 7.80469L16.9261 19.0558" stroke="#040404" strokeLinejoin="round"></path>
							<path d="M22.5518 11.1802H10.1755" stroke="#040404" strokeLinejoin="round"></path>
							<path d="M21.4266 15.6807H9.05042" stroke="#040404" strokeLinejoin="round"></path>
						</svg>
					</Link>
					</li>
					<li className={styles.appbar_shop}>
						<Link to="https://vastyle.co.kr/va/shop/index.php">
							<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.625" width="30.625" height="30.625" fill="#F3F3F3"></rect>
								<path d="M4 16L15.2326 5L27 16" stroke="#ababab"></path>
								<path d="M13 20.5H18" stroke="#ababab"></path>
								<path d="M8 16V26H23V16" stroke="#ababab"></path>
							</svg>
						</Link>
					</li>
					<li className={styles.appbar_nav}>
						<Link to="/menu" className={styles.header_menu__button}>
							<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.25" width="30.625" height="30.625" fill="#F3F3F3"></rect>
								<path d="M3.25 5.85H3.1V6V7.23077V7.38077H3.25H23.25H23.4V7.23077V6V5.85H23.25H3.25ZM3.25 13.2344H3.1V13.3844V14.6151V14.7651H3.25H23.25H23.4V14.6151V13.3844V13.2344H23.25H3.25ZM3.25 20.6192H3.1V20.7692V22V22.15H3.25H23.25H23.4V22V20.7692V20.6192H23.25H3.25Z" fill="#ababab" stroke="#ababab" strokeWidth="0.3"></path>
								<path d="M19.5357 24.5714C23.5595 24.5714 26.8214 21.3095 26.8214 17.2857C26.8214 13.2619 23.5595 10 19.5357 10C15.5119 10 12.25 13.2619 12.25 17.2857C12.25 21.3095 15.5119 24.5714 19.5357 24.5714Z" fill="#F3F3F3"></path>
								<path d="M25 22.75L29.25 27L25 22.75Z" fill="#F3F3F3"></path>
								<path d="M25 22.75L29.25 27M26.8214 17.2857C26.8214 21.3095 23.5595 24.5714 19.5357 24.5714C15.5119 24.5714 12.25 21.3095 12.25 17.2857C12.25 13.2619 15.5119 10 19.5357 10C23.5595 10 26.8214 13.2619 26.8214 17.2857Z" stroke="#ababab" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</Link>
					</li>
					<li className={styles.appbar_like}>
						<Link to="/shop_new/mypage_like.php">
							<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.875" width="30.625" height="30.625" fill="#F3F3F3"></rect>
								<path d="M15.7852 9.6875C15.7852 9.6875 13.4819 6.125 10.621 6.125C7.76013 6.125 4.875 8.00397 4.875 11.8589C4.875 14.4167 6.89944 16.3563 6.89944 16.3563L15.7852 25.5208L24.6709 16.3563C24.6709 16.3563 26.6953 14.4167 26.6953 11.8589C26.6953 8.00397 23.8102 6.125 20.9493 6.125C18.0884 6.125 15.7852 9.6875 15.7852 9.6875Z" stroke="#ababab"></path>
							</svg>
						</Link>
					</li>
					<li className={styles.appbar_mypage}>
						<Link to="https://vastyle.co.kr/shop_new/mypage_profile_main.php">
							<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" width="30.625" height="30.625" fill="#F3F3F3"></rect>
								<circle cx="15.2188" cy="10.125" r="5.625" stroke="#ababab"></circle>
								<path d="M4.5 25.9481C4.5 23.5661 4.5 18.8022 4.5 18.8022C11.6458 18.8022 25.9375 18.8022 25.9375 18.8022V25.9481" stroke="#ababab"></path>
							</svg>
						</Link>
				</li>
			</ul>
		</nav>
	)
}
