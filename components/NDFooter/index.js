import React, { useEffect, useState } from 'react';
import styles from '../../styles/YDFooter.module.scss';
import { IndexReq } from './../../requests/index';

export default function YDNavigator(props) {
  const [links, setlinks] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_links = await IndexReq.getlinks();

    setlinks(result_links);
  };
  return (
    <footer className={styles.footer}>
      {props.data ? (
        <div className={styles.container}>
          <img
            className={styles.logo}
            src={props.data.logo_bottom
              .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
              .replace('696e-incapital-4gly5z3b00512dc4-1305204328', '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la')}
            alt="logo"
            title="logo"
          />
          <div className={styles.links}>
            {links.map((obj, index) => {
              return (
                <a href={obj.link ? obj.link : '/'} target='_blank' key={`${index + 1}`}><i
                  className={styles.links_icon}
                  label={obj.title}
                  style={
                    obj.icon
                      ? {
                        backgroundImage: `url(${obj.icon
                          .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                          .replace(
                            '696e-incapital-4gly5z3b00512dc4-1305204328',
                            '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                          )})`,
                        backgroundColor: obj.bg
                      }
                      : {}
                  }
                ></i>
                  {obj.img && <div className={styles.qrcode}>
                    <img src={obj.img.replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                      .replace('696e-incapital-4gly5z3b00512dc4-1305204328', '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la')}></img></div>}
                </a>
              );
            })}
          </div>
          <div className={styles.wraper}>
            <span className={styles.link}>
              {`- ${props.data.copyrights}`}
              <a href="https://beian.miit.gov.cn/" target="_blank">{` | ${props.data.police_back} | `}</a>
              {`Add：${props.data.address} | Tel：${props.data.tel} -`}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </footer>
  );
}
