import React, { useContext } from 'react';
import { useData } from '../context/DataContext';


import List from '../components/feed/FeedListWrap';
// import { useData } from '../../src/context/DataContext';

import styles from '../components/header/Header.module.css';
import icoSort from '../assets/images/ico_sort.svg';

export default function FeedAll({ loadMore, isTopAll, isTopFollow, isTopWoman, isTopMen, isLoading, isError }) {
  // const { data } = useData();
  const { data, setApiUrl, apiConfig } = useData(); 

  console.log({data, setApiUrl, apiConfig})

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <>
      {isTopAll && <div>
        <div className={styles.header_util_section}>
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
              <img src={icoSort} alt="" />추천순 | 최신순</div>
          </div>
        </div>
      </div>}
      {isTopFollow && <div>follow</div>}
      {isTopWoman && <div>woman</div>}
      {isTopMen && <div>men</div>}
      <List data={data} loadMore={loadMore} />
      
    </>
  );
}