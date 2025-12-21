"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='container mx-auto   '>
            <Swiper navigation={true} autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} loop={true} modules={[Autoplay, Pagination, Navigation]}   className="mySwiper">
                <SwiperSlide><Image src={'/banner/b2.jpg'} className='' width={1540} height={200} alt='b2'></Image></SwiperSlide>
                <SwiperSlide><Image src={'/banner/b3.jpg'} className='' width={1540} height={200} alt='b1'></Image></SwiperSlide>
                <SwiperSlide><Image src={'/banner/b1.jpg'} className='' width={1540} height={200} alt='b3'></Image></SwiperSlide> 
                <SwiperSlide><Image src={'/banner/b4.jpg'} className='' width={1540} height={200} alt='b4'></Image></SwiperSlide> 
            </Swiper>
        </div>
    );
};

export default Banner;