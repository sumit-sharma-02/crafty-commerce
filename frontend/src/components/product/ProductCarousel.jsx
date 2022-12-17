import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// CSS Imports
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductCarousel.css";

// Icons used
import Suitcase1 from "../../images/suitcase1.jpg";

const ProductCarousel = (product) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-max h-max"
      >
        {product.product.images.map((image) => (
          <SwiperSlide key={image.public_id}>
            <img src={Suitcase1} alt={product.product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImage"
      >
        {product.product.images.map((image) => (
          <SwiperSlide key={image.public_id}>
            <img src={Suitcase1} alt={product.product.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
