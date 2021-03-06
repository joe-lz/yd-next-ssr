import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';

import styles from '../styles/contact.module.scss';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';
import NDFooter from '../components/NDFooter/';

function Home() {
  const [index, setindex] = useState([]);

  const [contact, setcontact] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_contact = await IndexReq.getContact();
    setcontact(result_contact);
  };
  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator data={contact} />
      {contact ? (
        <div
          className={`${styles.section} ${styles.animation_zoom}`}
          style={contact.contact_bg ? {
            backgroundImage: `url(${contact.contact_bg
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace(
                '696e-incapital-4gly5z3b00512dc4-1305204328',
                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
              )}?imageView2/0/format/jpg/interlace/1/q/90|imageslim)`,
          } : {}}
        >
          <div className={styles.section_content4}>
            <img src="./slogan.png" alt="" className={styles.slogan}/>
            <img src="./wechat.png" alt="" className={styles.wechat}/>
            <div className={`${styles.desc}`}>欢迎联系我们</div>
            {/* <div className={`${styles.section_title} ${styles.animation}`}>联系我们</div> */}
            <div className={styles.section_email_wrapper}>
              {/* <p>{contact.contact_us_desc1}</p>
              <p>{contact.contact_us_desc2}</p>
              <p>{contact.contact_us_desc3}</p> */}
              <div className={styles.section_email_wrapper_a}>
                <a href={`mailto:${contact ? contact.email_bp : ''}`}>BP投递</a>
                <a href={`mailto:${contact ? contact.email_pr : ''}`}>加入盈动</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.section} ${styles.animation_zoom}`}></div>
      )}
      <NDFooter data={contact} />
    </div>
  );
}

export default Home;
