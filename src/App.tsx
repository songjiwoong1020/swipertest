import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const mainImgList = ['main_img_001', 'main_img_002', 'main_img_003'];
const navBarList = ['시작', '캘린더', '소개'];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        // onSlideChange={(s) => s.snapIndex === 0 ? s?.pagination?.el : setFontColor('setFontBlack')}
        onSlideChange={(s) => console.log(s.pagination.el.classList)}
        onSwiper={(swiper) => console.log(swiper)}
        direction={'vertical'}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class='${className}'>${navBarList[index]}</span>`;
          },
          verticalClass: 'navBar'
        }}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
        speed={1000}
      >
        <SwiperSlide>
          <div className='mainSection'>
            <Swiper
              style={{position: 'absolute'}}
              autoplay={true}
              rewind={true}
              modules={[Autoplay]}
            >
              {mainImgList.map(v => (
                <SwiperSlide>
                  <div className={'main_img ' + v}></div>
                </SwiperSlide>
              ))}
            </Swiper>
            <img className='logo-img' src='/src/assets/ds_logo.png'/>
            <div className='mainSection_content'>
              <h2>"우리는 구원 받는 자들에게나 망하는 자들에게나 하나님 앞에서 그리스도의 향기니"</h2>
              <h2>고후2:15</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
          />
        </SwiperSlide>
        <SwiperSlide>
          안녕하세요! 동성교회 축구팀 그향FC입니다!
        </SwiperSlide>
        {/* <div className='blurBox'></div> 블러처리 부분 */}
      </Swiper>
    </>
  );
}
