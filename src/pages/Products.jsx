// import SwiperBox from "../ui/SwiperBox";
import styled from "styled-components";
import SideFilter from "../features/filter/SideFilter";
import ProductBox from "../ui/ProductBox";
import Loading from "../ui/Loading";
import { useSearchParams } from "react-router-dom";
import { useCars } from "../features/cars/useCars";

const StyledContainer = styled.div`
  grid-template-columns: 3fr 9fr;

  @media screen and (max-width: 550px) {
    grid-template-columns: 6fr 8fr;
  }
`;

function Products() {
  const { isLoading, cars } = useCars();
  const [searchParams] = useSearchParams();

  // 1. Filter
  const filteredBy = searchParams.get("price") || "all";
  let filteredData;

  if (isLoading) return <Loading />;

  if (filteredBy === "all") filteredData = cars;
  if (filteredBy === "higher-65000")
    filteredData = [...cars].filter((item) => item.price >= 65000);
  if (filteredBy === "lower-65000")
    filteredData = [...cars].filter((item) => item.price <= 65000);

  // 2. Sort
  const sortBy = searchParams.get("sortBy") || "none";
  const [field, direction] = sortBy.split("-");
  const modifire = direction === "asc" ? 1 : -1;

  const sortedData = [...filteredData]?.sort(
    (a, b) => (b[field] - a[field]) * modifire
  );

  return (
    <StyledContainer className="grid">
      <div>
        <SideFilter />
      </div>
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-end">
        {sortedData.map((product) => (
          <ProductBox key={product.id} data={product}></ProductBox>
        ))}
      </div>
    </StyledContainer>
  );
}

export default Products;
