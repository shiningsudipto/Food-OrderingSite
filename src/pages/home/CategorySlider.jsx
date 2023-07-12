import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../../components/SectionTitle";


const CategorySlider = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={"From 11:00am to 10:00pm"}
                    heading={"our categories"}
                />
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="text-white text-3xl uppercase -mt-20 text-center mr-8 ">salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-white text-3xl uppercase -mt-20 text-center mr-8">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-white text-3xl uppercase -mt-20 text-center mr-8">soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-white text-3xl uppercase -mt-20 text-center mr-8">desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="text-white text-3xl uppercase -mt-20 text-center mr-8">fruits</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategorySlider;