import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import React from "react";

const data = [
  { className: "swiper-slide1" },
  { className: "swiper-slide2" },
  { className: "swiper-slide3" },
  { className: "swiper-slide4" },
  { className: "swiper-slide1" },
  { className: "swiper-slide2" },
  { className: "swiper-slide3" },
  { className: "swiper-slide4" },
];

export default function swiper(props) {
  return (
    <Swiper
      className="swiper"
      spaceBetween={15}
      slidesPerView={props.showValue}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((swiperInfo, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={swiperInfo.className}></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
