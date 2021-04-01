import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';
import { Modal } from 'antd';

import styles from '../styles/team.module.scss';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';
import NDFooter from '../components/NDFooter/';

function Home() {
  const [visible, setvisible] = useState(false);
  const [curItem, setcurItem] = useState();

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
      <NDNavigator data={contact} />
      {contact ? (
        <div
          className={`${styles.section} ${styles.animation_zoom}`}

          style={
            contact.team_section1_bg
              ? {
                backgroundImage: `url(${contact.team_section1_bg
                  .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                  .replace(
                    '696e-incapital-4gly5z3b00512dc4-1305204328',
                    '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                  )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
              }
              : {}
          }
        >
          <div className={styles.section_content1}>
            <div className={`${styles.section_title} ${styles.animation}`}>
              {arr_title.map((obj, index) => {
                return <span key={`${index + 1}`}>{obj}</span>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.section} ${styles.animation_zoom}`}></div>
      )}

      {contact ? (
        <div className={styles.section_team}>
          <p className={styles.section_team_title}>团队介绍</p>
          <div className={styles.section_team_content}>
            <img
              className={styles.section_team_content_bg}
              src={
                contact.team_intro_bg
                  ? `${contact.team_intro_bg
                    .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                    .replace(
                      '696e-incapital-4gly5z3b00512dc4-1305204328',
                      '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                    )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim`
                  : ''
              }
            />
            <div className={styles.section_team_content_scroll}>
              {team.map((obj) => {
                return (
                  <div
                    className={styles.section_team_content_item}
                    key={obj._id}
                    onClick={() => {
                      setcurItem(obj);
                      setvisible(true);
                    }}
                  >
                    <div
                      className={styles.section_team_content_item_avatar}
                      style={
                        obj.avatar
                          ? {
                            backgroundImage: `url(${obj.avatar
                              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                              .replace(
                                '696e-incapital-4gly5z3b00512dc4-1305204328',
                                '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                              )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                          }
                          : {}
                      }
                    ></div>
                    <p>{obj.username}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.section} ${styles.animation_zoom}`}></div>
      )}
      {contact ? (
        <div
          className={`${styles.section} ${styles.animation_zoom}`}
          style={
            contact.team_section3_bg
              ? {
                backgroundImage: `url(${contact.team_section3_bg
                  .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                  .replace(
                    '696e-incapital-4gly5z3b00512dc4-1305204328',
                    '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                  )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
              }
              : {}
          }
        >
          <div className={styles.section_content4}>
            <div className={styles.section_desc} style={{ fontSize: '30px', letterSpacing: '10px' }}>
              {contact.team_section3_desc}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.section} ${styles.animation_zoom}`}></div>
      )}
      {contact ? (
        <div
          className={`${styles.section} ${styles.animation_zoom}`}
          style={
            contact.team_contact_bg
              ? {
                backgroundImage: `url(${contact.team_contact_bg
                  .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                  .replace(
                    '696e-incapital-4gly5z3b00512dc4-1305204328',
                    '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                  )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
              }
              : {}
          }
        >
          <div className={styles.section_content4}>
            <div className={styles.section_title}>联系我们</div>
            <div className={styles.section_email_wrapper}>
              <p>关于未来</p>
              <p>Do more, know more, be more.</p>
              <p>欢迎联系我们</p>
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
      <Modal visible={visible} footer={null} onCancel={() => setvisible(false)}>
        {curItem && (
          <div className={styles.modal_container}>
            <div className={styles.modal_left}>
              <div
                className={styles.modal_left_avatar}
                style={
                  curItem.avatar
                    ? {
                      backgroundImage: `url(${curItem.avatar
                        .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                        .replace(
                          '696e-incapital-4gly5z3b00512dc4-1305204328',
                          '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                        )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                    }
                    : {}
                }
              ></div>
              <div className={styles.modal_left_name}>{curItem.username}</div>
              <div className={styles.modal_left_role}>{curItem.role}</div>
            </div>
            <div
              className={styles.modal_right}
              style={
                curItem.bg_img
                  ? {
                    backgroundImage: `url(${curItem.bg_img
                      .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                      .replace(
                        '696e-incapital-4gly5z3b00512dc4-1305204328',
                        '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                      )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                  }
                  : {
                    backgroundImage: 'url("/next-ssr/bg-project.jpg")',
                  }
              }
            >
              <div className={styles.modal_right_desc}>{curItem.desc1}</div>
              <div className={styles.modal_right_desc}>{curItem.desc2}</div>
              <div className={styles.modal_right_desc}>{curItem.desc3}</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Home;
