import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const Main = () => {
  const mainImgList = ['main_img_001', 'main_img_002', 'main_img_003'];
  
  return (
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
  )
}

