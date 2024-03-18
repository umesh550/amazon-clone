import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import product0 from "../assets/images/Products/Product_0/product_0.jpg";
import product1 from "../assets/images/Products/Product_1/product_1.jpg";
import product2 from "../assets/images/Products/Product_2/product_2.jpg";
import product3 from "../assets/images/Products/Product_3/product_3.jpg";
import product4 from "../assets/images/Products/Product_4/product_4.jpg";
import product5 from "../assets/images/Products/Product_5/product_5.jpg";
import product6 from "../assets/images/Products/Product_6/product_6.jpg";
import product7 from "../assets/images/Products/Product_7/product_7.jpg";
import product8 from "../assets/images/Products/Product_8/product_8.jpg";
import product9 from "../assets/images/Products/Product_9/product_9.jpg";

const CarouselProduct = () => {
  const products = [
    product0,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
  ];
  return (
    <div className="bg-white m-4 p-4">
      <div className="text-2xl font-semibold py-3">Best Sellers in Books</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {products.map((product, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`/products/${i}`}>
                <img src={product} alt="" className="size-full max-h-[215px]" />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
