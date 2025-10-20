import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const navBarList = ['시작', '캘린더', '소개'];
const mainImgList = ['main_img_001', 'main_img_002', 'main_img_003', 'main_img_004'];

export default function App() {
  return (
    <>
      
      <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        direction={'vertical'}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return index === 0
              ? `<span class='${className} fontColorWhite'>${navBarList[index]}</span>`
              : `<span class='${className} fontColorBlack'>${navBarList[index]}</span>`;
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
            <div className='mainSection_content'>
              <p>동성 축구팀 파이팅!!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>캘린더 영역</SwiperSlide>
        <SwiperSlide>소개 영역</SwiperSlide>
        <div className='blurBox'></div>
      </Swiper>
    </>
  );
}
