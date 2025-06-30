import { BiArrowFromRight } from "react-icons/bi";
import ProductBox from "../ui/ProductBox";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

const data = [
  {
    id: 1,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/01.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 2,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/02.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 3,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/03.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 4,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/04.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 5,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/04.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 6,
    name: "پورشه باکستر",
    price: 75000,
    src: "public/cars/04.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
];

function SwiperBox({ title = "Title", path = "path" }) {
  return (
    <>
      <div className="flex idtems-center justify-between mt-6 mb-3">
        <Title>{title}</Title>
        <NavLink
          to={path}
          className="flex items-center gap-1 pl-1 text-emerald-900 font-semibold"
        >
          مشاهده همه
          <BiArrowFromRight />
        </NavLink>
      </div>

      <div className="px-2 sm:px-0">
        <Swiper
          modules={[Keyboard, Autoplay]}
          autoplay={{ delay: 4000 }}
          speed={2000}
          keyboard={{ enabled: true }}
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            120: {
              slidesPerView: 1,
            },
            460: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            780: {
              slidesPerView: 3,
            },
            1030: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1550: {
              slidesPerView: 6,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductBox data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperBox;
