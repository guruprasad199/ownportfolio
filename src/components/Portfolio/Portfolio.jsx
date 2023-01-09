import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Gurubus from "../../img/gurubus.png";
import AllStar from "../../img/allStar.png"
import deqodeshop from "../../img/deqodeshop.png";
import Xflow from "../../img/xflow.png"
import kitchen from "../../img/kitchen.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={AllStar} alt="" style={{height:'80%'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gurubus} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deqodeshop} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" style={{height:'80%'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kitchen} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Xflow} alt="" style={{height:'80%'}}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
