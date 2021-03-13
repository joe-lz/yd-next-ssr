import Head from "next/head";

import styles from "../styles/Home.module.css";
import SeoHead from "../components/SeoHead/";

export default function Home() {
  return (<div className={
    styles.container
  }>
    <SeoHead  />
    <div>team</div>
  </div>);
}

