import styles from '../../styles/YDNavigatoer.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function YDNavigator({}) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <img className={styles.logo} src="/next-ssr/yd-logo.png" alt="logo" title="logo" />
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
          <a className={styles.link} href='https://incapital-4gly5z3b00512dc4-1305204328.tcloudbaseapp.com/tcb-cms/#/' target='_blank'>登录</a>

        </div>
      </div>
    </nav>
  );
}
