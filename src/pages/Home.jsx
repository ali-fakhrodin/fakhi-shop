import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";

import SwiperBox from "../ui/SwiperBox";
import { BiConversation } from "react-icons/bi";

const images = [
  "public/home-swiper/img_1.jpg",
  "public/home-swiper/img_3.jpg",
  "public/home-swiper/img_4.jpg",
  "public/home-swiper/img_5.jpg",
];

function Home() {
  return (
    <>
      <div className="h-[60vh] flex items-center justify-center mt-2 relative overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay, Keyboard]}
          autoplay={{ delay: 4000 }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <div className=" flex w-full items-center justify-center h-full overflow-hidden">
                <img
                  className="block object-cover blur-[2px] brightness-75"
                  src={img}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute text-gray-200 bottom-1/4 left-0 right-0 mx-auto w-max z-10 ">
            <p className="px-4 py-1 text-[9rem] rounded-lg drop-shadow-xl alfa-slab-one-regular">
              FAKHI SHOP
            </p>
          </div>
        </Swiper>
      </div>
      <div className="container">
        <div>
          <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>
          {/* <SwiperBox title="خریدی به صرفه" path="/products"></SwiperBox> */}
        </div>
        <div className="mt-8 p-6 flex justify-between bg-slate-400 gap-4 rounded-xl">
          <div className="w-1/2 p-2">
            <h3 className="text-xl">کار هایی که ما انجام میدیم</h3>
            <p>خرید و فروش ماشین صفر</p>
            <p>خرید و فروش ماشین کارکرده</p>
            <p>خرید و فروش ماشین کارکرده</p>
            <p className="flex items-center gap-2">
              <BiConversation />
              مشاوره رایگان
            </p>
          </div>
          <div className="w-1/2 p-2 ">
            <p>شرکت ما</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
