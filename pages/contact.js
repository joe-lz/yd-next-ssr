import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';

import styles from '../styles/team.module.scss';
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
    // const result_index = await IndexReq.getindex();
    // console.log({ result_index });
    // setindex(result_index);
    const result_contact = await IndexReq.getContact();
    setcontact(result_contact);
  };
  let arr_title = [];
  if (contact) {
    arr_title = contact.team_section1_title.split(',');
    console.log(arr_title);
  }
  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator />
      {contact ? (
        <div
          className={styles.section}
          style={{
            backgroundImage: `url(${contact.contact_bg
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace(
                '696e-incapital-4gly5z3b00512dc4-1305204328',
                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
              )}?imageView2/0/format/jpg/interlace/1/q/30|imageslim)`,
          }}
        >
          <div className={styles.section_content4}>
            <div className={styles.section_title}>联系我们</div>
            <div className={styles.section_email_wrapper}>
              <div className={styles.section_email}>{`公关 ${contact ? contact.email_pr : ''}`}</div>
              <div className={styles.section_email}>{`发送商业计划书 ${contact ? contact.email_bp : ''}`}</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <NDFooter data={contact} />
    </div>
  );
}

export default Home;
