import styles from '../../styles/YDNavigatoer.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function YDNavigator(props) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {props.data && (
          <img
            className={styles.logo}
            src={props.data.logo_top
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace('696e-incapital-4gly5z3b00512dc4-1305204328', '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la')}
            alt="logo"
            title="logo"
          />
        )}
        <div></div>
        <div className={styles.wraper}>
          <Link href="/">
            <a className={router.pathname == '/' ? styles.link_active : styles.link}>我们</a>
          </Link>
          <Link href="/invest">
            <a className={router.pathname == '/invest' ? styles.link_active : styles.link}>投资</a>
          </Link>
          <Link href="/team">
            <a className={router.pathname == '/team' ? styles.link_active : styles.link}>团队</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? styles.link_active : styles.link}>联系</a>
          </Link>
          <a className={`${styles.link} ${styles.link_login}`} href="https://incapital-4gly5z3b00512dc4-1305204328.tcloudbaseapp.com/tcb-cms/" target="_blank">
            管理
          </a>
        </div>
      </div>
    </nav>
  );
}
