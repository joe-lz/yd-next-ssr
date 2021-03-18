import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';

import styles from '../styles/team.module.scss';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';
import NDFooter from '../components/NDFooter/';

function Home() {
  const [team, setteam] = useState([]);
  const [contact, setcontact] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_contact = await IndexReq.getContact();
    setcontact(result_contact);

    const result_team = await IndexReq.getteam();
    setteam(result_team);
  };
  let arr_title = [];
  if (contact) {
    arr_title = contact.team_section1_title.split(',');
  }
  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator />
      {contact ? (
        <div
          className={styles.section}
          style={{
            backgroundImage: `url(${contact.team_section1_bg
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace(
                '696e-incapital-4gly5z3b00512dc4-1305204328',
                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
              )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
          }}
        >
          <div className={styles.section_content1}>
            <div className={styles.section_title}>
              {arr_title.map((obj, index) => {
                return <span key={`${index + 1}`}>{obj}</span>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.section}></div>
      )}

      {contact ? (<div className={styles.section_team}>
        <p className={styles.section_team_title}>团队介绍</p>
        <div className={styles.section_team_content}>
          <img className={styles.section_team_content_bg} src={`${contact.team_intro_bg
            .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
            .replace(
              '696e-incapital-4gly5z3b00512dc4-1305204328',
              '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
            )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim`} />
          <div className={styles.section_team_content_scroll}>

            {team.map((obj) => {
              return <div className={styles.section_team_content_item} key={obj._id}>
                <div className={styles.section_team_content_item_avatar}
                  style={{
                    backgroundImage: `url(${obj.avatar
                      .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                      .replace(
                        '696e-incapital-4gly5z3b00512dc4-1305204328',
                        '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                      )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                  }}>
                </div>
                <p>{obj.username}</p>
              </div>
            })}
          </div>
        </div>
      </div>) : (
        <div className={styles.section}></div>
      )}
      {contact ? (
        <div
          className={styles.section}
          style={{
            backgroundImage: `url(${contact.team_section3_bg
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace(
                '696e-incapital-4gly5z3b00512dc4-1305204328',
                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
              )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
          }}
        >
          <div className={styles.section_content4}>

            <div className={styles.section_desc} style={{ fontSize: '30px', letterSpacing: '10px' }}>
              {contact.team_section3_desc}
            </div>

          </div>
        </div>
      ) : (
        <div className={styles.section}></div>
      )}
      {contact ? (
        <div
          className={styles.section}
          style={{
            backgroundImage: `url(${contact.team_contact_bg
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace(
                '696e-incapital-4gly5z3b00512dc4-1305204328',
                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
              )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
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
        <div className={styles.section}></div>
      )}
      <NDFooter data={contact} />
    </div>
  );
}

export default Home;
