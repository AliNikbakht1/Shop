import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Card from "../components/Card";
import data from '../data.json'

import React from "react";

export default function Swiper1(props) {
  return (
    <Swiper
      className="swiper1"
      spaceBetween={15}
      slidesPerView={props.showValue}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((cardInfo, index) => {
        return (
          <SwiperSlide key={index}>
            <Card img={cardInfo.img} title={cardInfo.title} description={cardInfo.description} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
