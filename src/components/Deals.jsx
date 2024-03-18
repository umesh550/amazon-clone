import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import deal1 from "../assets/images/Deals/deal_1.jpg";
import deal2 from "../assets/images/Deals/deal_2.jpg";
import deal3 from "../assets/images/Deals/deal_3.jpg";
import deal4 from "../assets/images/Deals/deal_4.jpg";
import deal5 from "../assets/images/Deals/deal_5.jpg";
import deal6 from "../assets/images/Deals/deal_6.jpg";
import deal7 from "../assets/images/Deals/deal_7.jpg";
import deal8 from "../assets/images/Deals/deal_8.jpg";
import deal9 from "../assets/images/Deals/deal_9.jpg";
import deal10 from "../assets/images/Deals/deal_10.jpg";

const Deals = () => {
  const Deals = [
    {
      id: 1,
      name: "iQOO Neo 7 Pro",
      discount: "21% off",
      img: deal1,
    },
    {
      id: 2,
      name: "Poco C51",
      discount: "45% off",
      img: deal2,
    },
    {
      id: 3,
      name: "Womenswear",
      discount: "Up to 85% off",
      img: deal3,
    },
    {
      id: 4,
      name: "Top Rated Wallets For Men's",
      discount: "₹699 under",
      img: deal4,
    },
    {
      id: 5,
      name: "Travell Adapters",
      discount: "Up to 94% off",
      img: deal5,
    },
    {
      id: 6,
      name: "Best Offers on Home Appliances",
      discount: "Up to 75% off",
      img: deal6,
    },
    {
      id: 7,
      name: "Best Deals on Trolley and Backpack",
      discount: "Up to 54% off",
      img: deal7,
    },
    {
      id: 8,
      name: "Water Softeners & Accessories",
      discount: "Up to 50% off",
      img: deal8,
    },
    {
      id: 9,
      name: "Best Deals on Puma",
      discount: "Up to 65% off",
      img: deal9,
    },
    {
      id: 10,
      name: "Uppercase Luggage and Bags",
      discount: "Up to 41% off",
      img: deal10,
    },
  ];
  return (
    <div className="bg-white m-4 p-4 min-w-[1000px]">
      <div className="flex space-x-3 mb-2">
        <p className="text-xl font-semibold">Todays&apos;s Deals</p>
        <p className="text-sm text-blue-500 mt-[6px] hover:underline pointer-event-auto">
          See All Deals
        </p>
      </div>
      <Swiper
        className=""
        slidesPerView={5}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
      >
        {Deals.map((deal) => {
          return (
            <SwiperSlide key={deal.id} className="">
              <div className="w-[240px] h-[200px] bg-AmazonClone-background px-4 my-2 rounded-sm">
                <img
                  src={deal.img}
                  alt=""
                  className="max-h-[184px] max-w-[224px] mx-auto py-2 align-top mix-blend-multiply "
                />
              </div>
              <div className="flex items-center space-x-2">
                <p className="rounded-sm text-xs p-1 bg-AmazonClone-discount text-white font-semibold">
                  {deal.discount}
                </p>
                <p className="text-xs text-AmazonClone-discount font-semibold">
                  Limited time deal
                </p>
              </div>
              <p className="text-sm font-medium">{deal.name}</p>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <img src={deal1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal10} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Deals;
