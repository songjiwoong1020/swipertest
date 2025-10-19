import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

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
        }}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='mainSection'>
            <Swiper
              style={{position: 'absolute'}}
              autoplay={true}
              rewind={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className='main_img main_img_001'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='main_img main_img_002'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='main_img main_img_003'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='main_img main_img_004'></div>
              </SwiperSlide>
            </Swiper>
            <div className='mainSection_content'>
              <p>동성 축구팀 파이팅!!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>캘린더 영역</SwiperSlide>
        <SwiperSlide>소개 영역</SwiperSlide>
      </Swiper>
      <div className='navBar'>
        <div>123</div>
        <div>456</div>
      </div>
    </>
  );
}
