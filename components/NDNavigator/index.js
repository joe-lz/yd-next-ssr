import styles from "../../styles/YDNavigatoer.module.css";

export default function YDNavigator({}) {


  return (<nav className={
    styles.nav
  }>
    <div className={
      styles.container
    }>
      <img className={
          styles.logo
        }
        src="/next-ssr/yd-logo.png"
        alt="logo"
        title='logo'/>
      <div className={styles.wraper}>
        <a href=""className={styles.link}>我们</a>
        <a href=""className={styles.link}>投资</a>
        <a href=""className={styles.link}>团队</a>
        <a href=""className={styles.link}>联系</a>
      </div>
    </div>


  </nav>);
}
