import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Data from "@data/sliders/partners";

const sliderSettings = {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 80,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const PartnersSlider = () => {
  return (
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <Swiper {...sliderSettings} className="swiper-container mil-infinite-show mil-up">
          {Data.items.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <a href={item.link} target="_blank" className="mil-partner-frame" style={{ width: "80px" }}>
                <img src={item.image} alt={item.alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersSlider;
