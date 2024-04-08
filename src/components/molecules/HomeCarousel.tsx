// import Swiper core and required modules
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const HomeCarousel = () => {
  return (
    <div className="mx-auto   w-3/4 h-[756px] bg-blue-600">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        allowTouchMove={false}
        loop={true}
        // scrollbar={}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-full w-full sm:w-full bg-red-500"
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="h-full bg-blue-50">
            <Image
              src="/images/jirafa.jpg"
              alt="@"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-blue-50">
            <Image
              className="-z-10"
              src="/images/jirafa.jpg"
              alt="@"
              layout="fill"
              objectFit="cover"
            />
            <h1>holiii</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
