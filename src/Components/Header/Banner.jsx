import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className=''>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper " >
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/p6TPYc0/gadget.jpg" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/vCWpgJk/realme.webp" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/30CjMX3/phone.jpg" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/jD6NzWN/apple.jpg" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/cTdxv4N/watch.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
