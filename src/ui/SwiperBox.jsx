import ProductBox from "../ui/ProductBox";
import Title from "./Title";

const data = [
  {
    id: 1,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/01.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 1,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/02.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 1,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/03.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 1,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/04.jpg",
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
];

function SwiperBox({title = "Title"}) {
  return (
    <>
      <Title>{title}</Title>
      <div className="flex gap-4">
        {data.map((data) => (
          <ProductBox data={data} key={data.src} />
        ))}
      </div>
    </>
  );
}

export default SwiperBox;
