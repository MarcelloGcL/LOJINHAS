import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/images/banners/home1.webp";
import banner2 from "../../assets/images/banners/home2.webp";
import banner3 from "../../assets/images/banners/home3.webp";

function Banner() {
  const banners = [{ image: banner1 }, { image: banner2 }, { image: banner3 }];

  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <img
                src={banner.image}
                alt={`Banner promocional ${index + 1}`}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                width="1920"
                height="768" 
                className="banner-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;