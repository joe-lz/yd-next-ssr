import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { IndexReq } from './../requests/index';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';


import styles from '../styles/Home.module.scss';
import SeoHead from '../components/SeoHead/';
import NDNavigator from '../components/NDNavigator/';
import NDFooter from '../components/NDFooter/';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

function Home() {
  const [indexArr, setindexArr] = useState([]);
  const [curIndex, setcurIndex] = useState(0);
  const [swiper, setswiper] = useState(null);
  const [contact, setcontact] = useState();
  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = async (value, page) => {
    const result_indexArr = await IndexReq.getindex();
    setindexArr(result_indexArr);

    const result_contact = await IndexReq.getContact();
    setcontact(result_contact);
  };

  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator data={contact} />
      <div className={styles.body}>
        <Swiper
          className={styles.swiper}
          direction='vertical'
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          controller={{ control: controlledSwiper }}
          onInit={(swiper) => {
            setswiper(swiper);
          }}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // }}
          // spaceBetween={50}
          // slidesPerView={3}
          onSlideChange={(e) => {
            setcurIndex(e.activeIndex);
          }}
        // onSwiper={(swiper) => console.log(swiper)}
        // pagination={{
        //   el: '.swiper-pagination',
        //   clickable: true,
        // }}
        >
          {indexArr.map((obj, index) => {
            return <SwiperSlide className={styles.swiper_item} key={`${index + 1}`}>
              {index === 0 && <div className={styles.header}></div>}
              <div
                className={`${styles.section} ${index == curIndex ? styles.animation_zoom : ''}`}
                style={
                  obj.bg
                    ? {
                      backgroundImage: `url(${obj.bg
                        .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                        .replace(
                          '696e-incapital-4gly5z3b00512dc4-1305204328',
                          '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                        )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                    }
                    : {}
                }
              >
                <div className={styles[`section_content${index}`]}>
                  {index != 3 && <button className={styles.icon_down} onClick={() => {
                    swiper.slideNext();
                  }} style={{ backgroundImage: 'url(/next-ssr/icon_down.png)' }}></button>}
                  <div className={`${styles.section_title} ${index == curIndex ? styles.animation : ''}`} style={index == 2 ? { color: 'black' } : {}}>
                    {obj.title}
                  </div>
                  <div className={`${styles.section_desc} ${index == curIndex ? styles.animation : ''}`} style={index == 2 ? { color: 'black' } : {}}>
                    {obj.desc}
                  </div>
                  <div className={`${styles.section_desc} ${index == curIndex ? styles.animation : ''}`} style={index == 2 ? { color: 'black' } : {}}>
                    {obj.desc2}
                  </div>
                  {index == 3 && contact && (
                    // <div className={styles.section_email_wrapper}>
                    //   <div className={styles.section_email}>{`公关 ${contact ? contact.email_pr : ''}`}</div>
                    //   <div className={styles.section_email}>{`发送商业计划书 ${contact ? contact.email_bp : ''}`}</div>
                    // </div>
                    <div className={styles.section_email_wrapper}>
                      <p>关于未来</p>
                      <p>Do more, know more, be more.</p>
                      <p>欢迎联系我们</p>
                      <div className={styles.section_email_wrapper_a}>
                        <a href={`mailto:${contact ? contact.email_bp : ''}`}>BP投递</a>
                        <a href={`mailto:${contact ? contact.email_pr : ''}`}>加入盈动</a>
                      </div>
                    </div>
                  )}

                  {/* 基金规模 */}
                  {obj.content_jijin && (
                    <div className={styles.section_typ2}>
                      <div className={styles.section_typ2_item}>
                        <div className={styles.section_typ2_item_title}>基金规模</div>
                        <div className={styles.section_typ2_item_desc}>{obj.content_jijin}</div>
                      </div>
                      <div className={styles.section_typ2_item}>
                        <div className={styles.section_typ2_item_title}>项目数量</div>
                        <div className={styles.section_typ2_item_desc}>{obj.content_xiangmu}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {index === 3 && <NDFooter data={contact} />}
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
