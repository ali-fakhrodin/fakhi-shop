import { BiArrowFromRight } from "react-icons/bi";
import ProductBox from "../ui/ProductBox";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import { useCars } from "../features/cars/useCars";
import Loading from "./Loading";

function SwiperBox({ title = "Title", path = "path" }) {
  const { isLoading, cars } = useCars();
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="flex idtems-center justify-between mt-5 mb-3">
        <Title>{title}</Title>
        <p className="flex items-center justify-center text-[17px] rounded-lg font-medium bg-slate-300 flex-grow mx-4">
          {cars.length} ماشین در {title}
        </p>
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
              slidesPerView: 1.3,
            },
            460: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            780: {
              slidesPerView: 3.3,
            },
            1030: {
              slidesPerView: 4.4,
            },
            1300: {
              slidesPerView: 5.4,
              spaceBetween: 10,
            },
            1550: {
              slidesPerView: 6,
            },
          }}
        >
          {cars.map((item) => (
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
