import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles/index.css';
import { useRef } from 'react';
import { Calendar, Info, Main } from './widgets';

const navBarList = ['시작', '캘린더', '소개'];

export default function App() {
  const mainIndex = useRef(0);

  return (
    <>
      <Swiper
        spaceBetween={50}
        onSlideChange={s => {
          console.log(s.params.pagination);
          mainIndex.current = s.activeIndex;
          s.pagination.render();
          s.pagination.update();
        }}
        onSwiper={swiper => console.log(swiper)}
        direction={'vertical'}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            const color = mainIndex.current === 0 ? 'color-white' : 'color-black';
            return `<span class='${className} ${color}'>${navBarList[index]}</span>`;
          },
          verticalClass: 'navBar',
        }}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
        speed={1000}
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>
          <Calendar />
        </SwiperSlide>
        <SwiperSlide>
          <Info />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
