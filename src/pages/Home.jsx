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
      <div className=" h-[70vh] flex items-center justify-center shadow-lg my-4 relative">
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
              <div className=" flex w-full items-center justify-center h-full overflow-hidden rounded-3xl">
                <img className=" block object-cover" src={img} />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute flex gap-2 text-lg text-gray-200 left-3 bottom-3 z-10">
            <button className="bg-emerald-900 hover:bg-emerald-600 px-4 py-1 rounded-lg">
              مشاهده محصولات
            </button>
            <button className="bg-emerald-900 hover:bg-emerald-600 px-4 py-1 rounded-lg">
              سبد خرید
            </button>
          </div>
        </Swiper>
      </div>
      <div className="container">
        <div>
          <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>
          <SwiperBox title="کالای مورد علاقه" path="/products"></SwiperBox>
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
