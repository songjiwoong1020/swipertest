import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { useRef } from 'react';
import QueryTest from './QueryTest';

const mainImgList = ['main_img_001', 'main_img_002', 'main_img_003'];
const navBarList = ['시작', '캘린더', '소개'];

export default function App() {
  const mainIndex = useRef(0);
  return (
    <>
      <Swiper
        spaceBetween={50}
        onSlideChange={(s) => {
          console.log(s.params.pagination);
          mainIndex.current = s.activeIndex;
          s.pagination.render();
          s.pagination.update();
        }}
        onSwiper={(swiper) => console.log(swiper)}
        direction={'vertical'}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            let color = mainIndex.current === 0 ? 'color-white' : 'color-black';
            return `<span class='${className} ${color}'>${navBarList[index]}</span>`;
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
              <h2>"우리는 구원 받는 자들에게나 망하는 자들에게나</h2>
              <h2>하나님 앞에서 그리스도의 향기니" 고후2:15</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
          />
          <QueryTest/>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>안녕하세요! 동성교회 축구팀 그향FC입니다!</p>
            <br/><br/><br/>
            <p>그리스도의 향기</p>
            <p>12 내가 그리스도의 복음을 위하여 드로아에 이르매 주 안에서 문이 내게 열렸으되</p>
            <p>13 내가 내 형제 디도를 만나지 못하므로 내 심령이 편하지 못하여 그들을 작별하고 마게도냐로 갔노라</p>
            <p>14 항상 우리를 그리스도 안에서 이기게 하시고 우리로 말미암아 각처에서 그리스도를 아는 냄새를 나타내시는 하나님께 감사하노라</p>
            <p>15 우리는 구원 받는 자들에게나 망하는 자들에게나 하나님 앞에서 그리스도의 향기니</p>
            <p>16 이 사람에게는 사망으로부터 사망에 이르는 냄새요 저 사람에게는 생명으로부터 생명에 이르는 냄새라 누가 이 일을 감당하리요</p>
            <p>17 우리는 수많은 사람들처럼 하나님의 말씀을 혼잡하게 하지 아니하고 곧 순전함으로 하나님께 받은 것 같이 하나님 앞에서와 그리스도 안에서 말하노라</p>
          </div>
        </SwiperSlide>
        {/* <div className='blurBox'></div> 블러처리 부분 */}
      </Swiper>
    </>
  );
}