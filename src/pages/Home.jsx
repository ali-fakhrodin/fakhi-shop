import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperBox from "../ui/SwiperBox";

function Home() {
  return (
    <>
      <div className="h-[80vh] flex items-center justify-center">
        {" "}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          keyboard={{ enabled: true }}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div>
        <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>
        <SwiperBox title="کالای مورد علاقه" path="/products"></SwiperBox>
        <SwiperBox title="خریدی به صرفه" path="/products"></SwiperBox>
      </div>
    </>
  );
}

export default Home;
