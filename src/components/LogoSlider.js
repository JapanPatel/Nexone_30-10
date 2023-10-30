import { Swiper, SwiperSlide } from "swiper/react";
import { brandListProps2 } from "../sliderProps";
const LogoSlider = () => {
  return (
    <div className="brand-section ">
      <div className="container">
        <div className="row">
          <Swiper {...brandListProps2} className="brand-list owl-carousel">
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/1.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/2.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/3.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/4.png" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/1.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/2.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/3.svg" alt />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand-single-box">
                <div className="brand-thumb">
                  <img src="assets/images/resource/colorlogo/4.png" alt />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
