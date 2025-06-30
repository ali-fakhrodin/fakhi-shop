import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard, EffectCube } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/effect-cube";

import SwiperBox from "../ui/SwiperBox";
import { BiConversation } from "react-icons/bi";
import { TiTickOutline } from "react-icons/ti";

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
          speed={2000}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
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
        <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>
        <div className="mt-8 p-8 flex justify-between bg-[#44576D] shadow-xl gap-4 rounded-xl ">
          <div className="w-1/2 p-2 text-xl flex flex-col gap-2 ">
            <h3 className="text-xl mb-4 text-stone-300 text-center bg-neutral-800 rounded-t-xl px-8 py-1.5">
              کار هایی که ما انجام میدیم
            </h3>
            <p className="pr-2 pl-4 py-1 bg-stone-200 w-max rounded-tl-xl rounded-r-lg flex items-center ">
              <TiTickOutline /> &nbsp; خرید و فروش ماشین صفر، مستقیم از نمایندگی
            </p>
            <p className="pr-2 pl-4 py-1 bg-stone-200 w-max rounded-tl-xl rounded-r-lg flex items-center gap-2 ">
              <BiConversation />
              مشاوره رایگان شبانه روزی + راهنمایی برای خرید بصرفه
            </p>
            <p className="pr-2 pl-4 py-1 bg-stone-200 w-max rounded-tl-xl rounded-r-lg flex items-center ">
              <TiTickOutline /> &nbsp; خرید و فروش ماشین کارکرده
            </p>
            <p className="pr-2 pl-4 py-1 bg-stone-200 w-max rounded-tl-xl rounded-r-lg flex items-center ">
              <TiTickOutline /> &nbsp; خرید و فروش ماشین کارکرده به همراه برگه
              معاینه فنی
            </p>
          </div>
          <div className="w-1/2 p-2 ">
            <p className="text-xl mb-2 text-center bg-neutral-200 rounded-t-xl px-8 py-1.5 ">
              ماشین های شرکت ما
            </p>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 10,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination, Keyboard, Autoplay]}
              keyboard={true}
              speed={2000}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="public/home-swiper/img_1.jpg"
                  className="h-[200px] w-full overflow-hidden object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="public/home-swiper/img_3.jpg"
                  className="h-[200px] w-full overflow-hidden object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="public/home-swiper/img_4.jpg"
                  className="h-[200px] w-full overflow-hidden object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="public/home-swiper/img_5.jpg"
                  className="h-[200px] w-full overflow-hidden object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SwiperBox title="خریدی به صرفه" path="/products"></SwiperBox>
        <div className="mt-8 p-6 flex justify-between bg-[#44576D] shadow-xl gap-4 rounded-xl ">
          <div className="w-full ">
            <p className="text-xl mb-2 text-center bg-neutral-200 rounded-t-xl px-8 py-1.5 ">
              چرا فخی شاپ؟
            </p>
            <div className="flex gap-12 px-8">
              <ul className="w-1/2">
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - بهترین خدمات در سطح کشور -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - خریدی ایمن و بصرفه -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - امکان پرداخت با ارز دیجیتال -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - مشاوره رایگان -
                </li>
              </ul>
              <ul className="w-1/2">
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - بهترین خدمات در سطح کشور -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - خریدی ایمن و بصرفه -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - امکان پرداخت با ارز دیجیتال -
                </li>
                <li className="bg-slate-200 p-2 text-center mx-auto text-lg mb-2">
                  - مشاوره رایگان -
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
