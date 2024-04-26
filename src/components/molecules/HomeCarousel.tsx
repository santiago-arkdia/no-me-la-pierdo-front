"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import { ImageCarousel } from "../atoms/ImageCarousel";

const dataCarousel = {
  carousel: {
    list: [
      {
        name: "Bioparke Ukumari",
        date: "May 11-12, 2024",
        place: "Pereira, Colombia",
        url: "#",
        image: "/images/jirafa.jpg",
      },
      {
        name: "Bioparke Ukumari",
        date: "May 12-13, 2024",
        place: "Pereira, Colombia",
        url: "#",
        image: "/images/suricata.jpg",
      },
      {
        name: "Bioparke Ukumari",
        date: "May 13-14, 2024",
        place: "Pereira, Colombia",
        url: "#",
        image: "/images/elephant.jpg",
      },
    ],
  },
};

const HomeCarousel = () => {
  return (
    <div className="mx-auto w-3/4 h-[756px]">
      <Swiper
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full sm:w-full"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        {dataCarousel.carousel.list.map((data, index) => (
          <SwiperSlide key={index}>
            <ImageCarousel data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
