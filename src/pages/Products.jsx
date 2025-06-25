// import SwiperBox from "../ui/SwiperBox";
import styled from "styled-components";
import SideFilter from "../features/basket/filter/SideFilter";
import ProductBox from "../ui/ProductBox";
import { useSearchParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "پورشه 911",
    price: 120000,
    src: "public/cars/01.jpg",
    score: 4.9,
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 2,
    name: "پورشه باکستر",
    price: 63000,
    src: "public/cars/02.jpg",
    score: 4.7,
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 3,
    name: "شورولت کامارو",
    price: 73000,
    src: "public/cars/03.jpg",
    score: 4.6,
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 4,
    name: "پورشه باکستر",
    price: 65000,
    src: "public/cars/04.jpg",
    score: 4.4,
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
  {
    id: 5,
    name: "پورشه باکستر",
    price: 50000,
    src: "public/cars/04.jpg",
    score: 4.8,
    desc: "ماشین کم کارکرد. تولید سال 2023 و بدون رنگ. از اول دست خودم بوده . برای بازدید رشت تشریف بیارید",
  },
];

function Products() {
  const [searchParams] = useSearchParams();

  // 1. Filter
  const filteredBy = searchParams.get("price") || "all";
  // console.log(filteredBy);
  let filteredData;

  if (filteredBy === "all") filteredData = data;
  if (filteredBy === "higher-65000")
    filteredData = [...data].filter((item) => item.price >= 65000);
  if (filteredBy === "lower-65000")
    filteredData = [...data].filter((item) => item.price <= 65000);
  console.log(filteredData)
  // console.log(filteredData);

  // 2. Sort
  const sortBy = searchParams.get("sortBy");

  let sortedData;

  if (!sortBy) sortedData = filteredData;

  if (sortBy === "none") sortedData = filteredData;
  if (sortBy === "price-desc")
    sortedData = [...filteredData].sort((a, b) => a.price - b.price);
  if (sortBy === "price-asc")
    sortedData = [...filteredData].sort((a, b) => b.price - a.price);

  if (sortBy === "score-desc")
    sortedData = [...filteredData].sort((a, b) => a.score - b.score);
  if (sortBy === "score-asc")
    sortedData = [...filteredData].sort((a, b) => b.score - a.score);

  const StyledContainer = styled.div`
    grid-template-columns: 2fr 10fr;
  `;

  return (
    <StyledContainer className="grid">
      <div>
        <SideFilter />
      </div>
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-center">
        {sortedData.map((product) => (
          <ProductBox key={product.id} data={product}></ProductBox>
        ))}
      </div>
    </StyledContainer>
  );
}

export default Products;
