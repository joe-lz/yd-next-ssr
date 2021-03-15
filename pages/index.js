import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';

import styles from '../styles/Home.module.css';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';

function Home() {
  useEffect(() => {
    searchResult();
  }, []);

  const searchResult = async (value, page) => {
    // const result = await IndexReq.getIndexList({page:'cdsc'});
  };

  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator />
      <div className={styles.section} style={{backgroundImage: "url(https://images.pexels.com/photos/452780/pexels-photo-452780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)"}}></div>
      <div className={styles.section} style={{backgroundImage: "url(https://images.pexels.com/photos/241558/pexels-photo-241558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}></div>
      <div className={styles.section} style={{backgroundImage: "url(https://images.pexels.com/photos/355749/pexels-photo-355749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}></div>
      <div className={styles.section} style={{backgroundImage: "url(https://images.pexels.com/photos/25763/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}></div>
    </div>
  );
}

export default Home;
