import styles from '../../styles/YDFooter.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../../requests/index';

export default function YDNavigator(props) {
  const [links, setlinks] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_links = await IndexReq.getlinks();

    setlinks(result_links);
  };
  return (
    <footer className={styles.footer}>
      {props.data ? (
        <div className={styles.container}>
          <img className={styles.logo} src="/next-ssr/yd-logo-white.png" alt="logo" title="logo" />
          <div className={styles.wraper}>
            <span className={styles.link}>
              {`- ${props.data.copyrights} | ${props.data.police_back} | Add：${props.data.address} | Tel：${props.data.tel} -`}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </footer>
  );
}
