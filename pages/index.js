import React, { useState } from 'react';

import SwiperCore, { A11y, Controller, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import NDFooter from '../components/NDFooter/';
import NDNavigator from '../components/NDNavigator/';
import SeoHead from '../components/SeoHead/';
import styles from '../styles/Home.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

function Home(props) {
  console.log(props);
  const [curIndex, setcurIndex] = useState(0);
  const [swiper, setswiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  // const [indexArr, setindexArr] = useState([]);
  // const [contact, setcontact] = useState();
  // const [honer, sethoner] = useState([]);


  // useEffect(() => {
  //   init();
  //   console.log({ props });
  // }, []);

  // const init = async (value, page) => {
  //   const result_indexArr = await IndexReq.getindex();
  //   result_indexArr.slice(2, 0, { type: 'honor' })
  //   setindexArr(result_indexArr);

  //   const result_contact = await IndexReq.getContact();
  //   setcontact(result_contact);
  //   const result_honer = await IndexReq.gethoner();
  //   sethoner(result_honer);
  // };

  const indexArr = props.result_indexArr;
  const honer = props.result_honer;
  const contact = props.result_contact;

  return (
    <div className={styles.container}>
      <SeoHead />
      <NDNavigator data={contact} />
      <div className={styles.body}>
        <Swiper
          className={styles.swiper}
          direction="vertical"
          cssMode={true}
          // mousewheel={true}
          // keyboard={true}
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
            let item = null;
            if (obj.type == 'honor') {
              item = <SwiperSlide className={styles.swiper_item} key={obj._id}>
                <div className={`${styles.section}`}>
                  <div
                    className={`${styles.section_bg} ${index == curIndex ? styles.animation_zoom : ''}`}
                    style={
                      contact
                        ? {
                          backgroundImage: `url(${contact.honer_bg
                            .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                            .replace(
                              '696e-incapital-4gly5z3b00512dc4-1305204328',
                              '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                            )}?imageView2/0/format/jpg/interlace/1/q/80|imageslim)`,
                        }
                        : {}
                    }
                  ></div>
                  <div className={`${styles.section_honer}`}>
                    <div className={`${styles.section_honer_container}`}>
                      <p className={styles.title}>盈动荣誉</p>
                      {honer.map((honerItem, index) => {
                        return <p key={honerItem.title}>{honerItem.title}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            } else {
              item = (
                <SwiperSlide className={styles.swiper_item} key={obj._id}>
                  {index === 0 && <div className={styles.header}></div>}
                  <div className={`${styles.section}`}>
                    <div
                      className={`${styles.section_bg} ${index == curIndex ? styles.animation_zoom : ''}`}
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
                    ></div>
                    <div className={styles[`section_content${index}`]} data={`section_content${index}`}>
                      {index != indexArr.length - 1 && (
                        <button
                          className={styles.icon_down}
                          onClick={() => {
                            swiper.slideNext();
                          }}
                          style={{ backgroundImage: 'url(/next-ssr/icon_down.png)' }}
                        ></button>
                      )}
                      <div
                        className={`${styles.section_title} ${index == curIndex ? styles.animation : ''}`}
                        style={index == 2 ? { color: 'black' } : {}}
                      >
                        {obj.title}
                      </div>
                      <div
                        className={`${styles.section_desc} ${index == curIndex ? styles.animation : ''}`}
                        style={index == 2 ? { color: 'black' } : {}}
                      >
                        {obj.desc}
                      </div>
                      <div
                        className={`${styles.section_desc} ${index == curIndex ? styles.animation : ''}`}
                        style={index == 2 ? { color: 'black' } : {}}
                      >
                        {obj.desc2}
                      </div>
                      {index == indexArr.length - 1 && contact && (
                        <div className={styles.section_email_wrapper}>
                          <p>{contact.contact_us_desc1}</p>
                          <p>{contact.contact_us_desc2}</p>
                          <p>{contact.contact_us_desc3}</p>
                          <div className={styles.section_email_wrapper_a}>
                            <a href={`mailto:${contact ? contact.email_bp : ''}`}>BP投递</a>
                            <a href={`mailto:${contact ? contact.email_pr : ''}`}>加入盈动</a>
                          </div>
                        </div>
                      )}

                      {/* 基金规模 */}
                      {/* {obj.content_jijin && (
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
                  )} */}
                      <div className={styles.item_wrapper}>
                        {obj.item1_icon && (
                          <div className={styles.item_icon}>
                            <img
                              className={styles.item_icon_img}
                              src={`${obj.item1_icon
                                .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                                .replace(
                                  '696e-incapital-4gly5z3b00512dc4-1305204328',
                                  '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                                )}?imageView2/0/interlace/1/q/80|imageslim`}
                              alt=""
                            />
                            <p className={styles.item_title}>{obj.item1_title}</p>
                            <p className={styles.item_desc}>{obj.item1_desc}</p>
                          </div>
                        )}
                        {obj.item2_icon && (
                          <div className={styles.item_icon}>
                            <img
                              className={styles.item_icon_img}
                              src={`${obj.item2_icon
                                .replace('cloud://incapital-4gly5z3b00512dc4.', 'https://')
                                .replace(
                                  '696e-incapital-4gly5z3b00512dc4-1305204328',
                                  '696e-incapital-4gly5z3b00512dc4-1305204328.tcb.qcloud.la',
                                )}?imageView2/0/interlace/1/q/80|imageslim`}
                              alt=""
                            />
                            <p className={styles.item_title}>{obj.item2_title}</p>
                            <p className={styles.item_desc}>{obj.item2_desc}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {index === indexArr.length - 1 && <NDFooter data={contact} />}
                </SwiperSlide>
              );
            }
            return item;
          })}
        </Swiper>
      </div>
    </div>
  );
}

Home.getInitialProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/home`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  const json = await res.json();

  return json;
};


export default Home;
