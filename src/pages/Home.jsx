import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/effect-cube";

import SwiperBox from "../ui/SwiperBox";
import { BiCar, BiSupport } from "react-icons/bi";
import { TiTickOutline, TiTime } from "react-icons/ti";
import { useUser } from "../features/authentication/useUser";
import { GrCurrency } from "react-icons/gr";
import { MdUpdate } from "react-icons/md";
import { CiShop } from "react-icons/ci";

const images = [
  "public/home-swiper/img_1.jpg",
  "public/home-swiper/img_3.jpg",
  "public/home-swiper/img_4.jpg",
  "public/home-swiper/img_5.jpg",
];

function Home() {
  const {
    user: { user },
  } = useUser();

  return (
    <>
      <div className="h-[70vh] md:h-[60vh] flex items-center justify-center mt-2 relative overflow-hidden">
        <p className="mt-1 right-4 text-sm absoluted font-sans top-3 absolute z-30 text-white">
          خوش اومدی {user.user_metadata.fullName} ✋
        </p>
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
                  className="block object-cover blur-[2px] brightness-75 h-full md:h-auto"
                  src={img}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute text-gray-200 bottom-1/4 left-0 right-0 mx-auto w-max z-10 ">
            <p className="px-4 py-1 text-[2.5rem] sm:text-[5rem] xl:text-[9rem] rounded-lg drop-shadow-xl alfa-slab-one-regular">
              FAKHI SHOP
            </p>
          </div>
        </Swiper>
      </div>

      <div className="container">
        <SwiperBox title="جدید ترین ماشین ها" path="/products"></SwiperBox>

        <div className="p-2 md:p-4 flex flex-col lg:flex-row justify-between bg-[#44576D] shadow-xl gap-2 rounded-xl">
          <div className="w-full lg:w-1/2 p-2 text-sm md:text-xl text-wrap gap-2">
            <h3 className="text-xl mb-3 text-center bg-neutral-200 rounded-t-xl px-8 py-1.5">
              درباره شرکت فخی شاپ
            </h3>
            <p className="p-3 bg-stone-200 text-wrap text-[15px] sm:text-[17px] xl:text-[18px] text-justify rounded-tl-xl rounded-r-lg flex items-center ">
              <TiTickOutline /> &nbsp; خرید و فروش ماشین کارکرده به همراه برگه
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-2 ">
            <h3 className="text-xl mb-3 text-center bg-neutral-200 rounded-t-xl px-8 py-1.5 ">
              ماشین های شرکت ما
            </h3>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: -40,
                shadowScale: 0.7,
              }}
              pagination={true}
              modules={[EffectCube, Pagination, Keyboard]}
              keyboard={true}
              speed={2000}
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

        <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>

        <SwiperBox title="خریدی به صرفه" path="/products"></SwiperBox>

        <div className="mt-4 p-6 flex justify-between bg-[#44576D] shadow-xl gap-4 rounded-xl ">
          <div className="w-full">
            <p className="text-xl mb-2 text-center bg-neutral-200 rounded-t-xl px-8 py-1.5 ">
              چرا فخی شاپ؟
            </p>
            <div className="flex gap-4 lg:gap-12 px-0 md:px-8">
              <ul className="w-full md:w-1/2">
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
              <ul className="w-full md:w-1/2">
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
            <div className="flex flex-wrap justify-around text-white mt-3 ">
              <div className="flex flex-col items-center gap-2">
                <BiSupport className="text-[4.4rem]" />
                <p>مشاوره رایگان</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CiShop className="text-[4.4rem]" />
                <p>3 شعبه ی فروش در رشت</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MdUpdate className="text-[4.4rem]" />
                <p>آپدیت دائمی ماشین ها</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BiCar className="text-[4.4rem]" />
                <p>تیم متخصص چک آپ خودرو</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TiTime className="text-[4.4rem]" />
                <p>خدمات شبانه روی</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GrCurrency className="text-[4.4rem]" />
                <p>پذیرنده ی معامله با ارز منصوری</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
