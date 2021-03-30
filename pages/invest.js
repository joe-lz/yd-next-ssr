import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';
import { Modal } from 'antd';

import styles from '../styles/invest.module.scss';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';
import NDFooter from '../components/NDFooter/';

function Home() {
  const [visible, setvisible] = useState(false);
  const [curItem, setcurItem] = useState();

  const [active, setactive] = useState(-1);
  const [contact, setcontact] = useState();
  const [invest, setinvest] = useState([]);
  const [investType, setinvestType] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_contact = await IndexReq.getContact();
    setcontact(result_contact);
    const result_invest = await IndexReq.getinvest();
    setinvest(result_invest);

    const result_invest_type = await IndexReq.getinvestType();
    setinvestType(result_invest_type);
  };

  const getinvest = async (id) => {
    const result_invest = await IndexReq.getinvest(id);
    setinvest(result_invest);
  };

  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator />
      {contact ? (
        <div
          className={styles.section}
          style={
            contact.invest_section1_bg
              ? {
                backgroundImage: `url(${contact.invest_section1_bg
                  .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                  .replace(
                    '696e-incapital-4gly5z3b00512dc4-1305204328',
                    '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                  )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
              }
              : {}
          }
        >
          <div className={styles.section_content}>
            <div className={styles.section_desc}>{contact.invest_section1_title1}</div>
            <div className={styles.section_desc2}>{contact.invest_section1_title2}</div>
          </div>
        </div>
      ) : (
        <div className={styles.section}></div>
      )}
      <div className={styles.section_list}>
        <div className={styles.section_nav}>
          <div className={styles.section_content_nav}>
            <div
              className={active == -1 ? styles.section_nav_item_active : styles.section_nav_item}
              onClick={() => {
                setactive(-1);
                getinvest();
              }}
            >
              全部
            </div>
            {investType.map((obj, index) => {
              return (
                <div
                  className={active == index ? styles.section_nav_item_active : styles.section_nav_item}
                  key={obj._id}
                  onClick={() => {
                    setactive(index);
                    getinvest(obj._id);
                  }}
                >
                  {obj.title}
                </div>
              );
            })}
          </div>
        </div>
        <p className={styles.section_content_invest_title}>项目/简介</p>
        <div className={styles.section_content_invest}>
          {invest && invest.map((obj) => {
            return (
              <div
                className={styles.section_content_invest_item}
                key={obj._id}
                onClick={() => {
                  setcurItem(obj);
                  setvisible(true);
                }}
              >
                <div
                  className={styles.section_content_invest_item_img}
                  style={
                    obj.logo
                      ? {
                        backgroundImage: `url(${obj.logo
                          .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                          .replace(
                            '696e-incapital-4gly5z3b00512dc4-1305204328',
                            '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                          )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                      }
                      : {}
                  }
                ></div>
                <p className={styles.section_content_invest_item_title}>{obj.title}</p>
              </div>
            );
          })}
          <div className={styles.section_content_invest_item} style={{ borderBottom: 'none' }}></div>
          <div className={styles.section_content_invest_item} style={{ borderBottom: 'none' }}></div>
          <div className={styles.section_content_invest_item} style={{ borderBottom: 'none' }}></div>
          <div className={styles.section_content_invest_item} style={{ borderBottom: 'none' }}></div>
        </div>
      </div>
      {contact ? (
        <div
          className={styles.section}
          style={
            contact.invest_contact_bg
              ? {
                backgroundImage: `url(${contact.invest_contact_bg
                  .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                  .replace(
                    '696e-incapital-4gly5z3b00512dc4-1305204328',
                    '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                  )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
              }
              : {}
          }
        >
          <div className={styles.section_content3}>
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
      <Modal visible={visible} footer={null} onCancel={() => setvisible(false)}>
        {curItem && (
          <div className={styles.modal_container}>
            <div
              className={styles.modal_left}
              style={
                curItem.bg_color
                  ? {
                    backgroundColor: curItem.bg_color,
                  }
                  : {}
              }
            >
              {curItem.logo && (
                <img
                  src={`${curItem.logo
                    .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                    .replace(
                      '696e-incapital-4gly5z3b00512dc4-1305204328',
                      '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                    )}`}
                  alt=""
                  className={styles.modal_left_avatar}
                />
              )}
              <div className={styles.modal_left_name}>{curItem.title}</div>
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
                      )}?imageView2/0/format/jpg/interlace/1/q/50|imageslim)`,
                  }
                  : {
                    backgroundImage: 'url("/next-ssr/bg-project.jpg")'
                  }
              }
            >
              <div className={styles.modal_right_desc}>{curItem.producer}</div>
              <div className={styles.modal_right_title}>{curItem.username}</div>
              <div className={styles.modal_right_desc}>{curItem.invest_time}</div>
              {curItem.site && <div className={styles.modal_right_title}>官网</div>}
              <div className={styles.modal_right_desc}>{curItem.site}</div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Home;
