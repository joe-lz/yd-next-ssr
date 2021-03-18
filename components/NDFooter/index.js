import styles from '../../styles/YDFooter.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function YDNavigator(props) {
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
