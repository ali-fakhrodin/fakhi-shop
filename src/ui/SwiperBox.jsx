import { BiArrowFromRight } from "react-icons/bi";
import ProductBox from "../ui/ProductBox";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

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

      <div className="flex gap-4">
        <Swiper
          modules={[Pagination, Keyboard]}
          // autoplay={{ delay: 4000 }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductBox data={item}>
                <div className=" flex w-full items-center justify-center h-full overflow-hidden">
                  <img className=" block object-cover" src={item.src} />
                </div>
              </ProductBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperBox;
