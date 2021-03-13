import Head from "next/head";
import React, {useEffect, useState} from "react";
import { IndexReq } from "./../requests/index";

import styles from "../styles/Home.module.css";
import SeoHead from "../components/SeoHead/";
import NDNavigator from "../components/NDNavigator/";

function Home() {
  useEffect(() => {
    searchResult();
  }, []);

  const searchResult = async (value, page) => {
    // const result = await IndexReq.getIndexList({page:'cdsc'});
  }

  return (<div className={
    styles.container
  }>
    <SeoHead/>
    <NDNavigator/>
    <div>index</div>
  </div>);
}

export default Home
