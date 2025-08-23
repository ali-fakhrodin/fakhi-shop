// import SwiperBox from "../ui/SwiperBox";
import styled from "styled-components";
import SideFilter from "../features/filter/SideFilter";
import ProductBox from "../ui/ProductBox";
import Loading from "../ui/Loading";
import { useSearchParams } from "react-router-dom";
import { useCars } from "../features/cars/useCars";
import { Toaster } from "react-hot-toast";

const StyledContainer = styled.div`
  grid-template-columns: 3fr 9fr;
  gap: 1rem;

  @media screen and (max-width: 550px) {
    grid-template-columns: 6fr 8fr;
  }
`;

function Products() {
  const { isLoading, cars } = useCars();
  const [searchParams] = useSearchParams();

  // 1. Filter
  const filteredByPrice = searchParams.get("price") || "all";
  const filteredByCarName = searchParams.get("carName") || "all";
  let filteredData;

  if (isLoading) return <Loading />;

  if (filteredByPrice === "all") filteredData = cars;
  if (filteredByPrice === "higher-65000")
    filteredData = [...cars].filter((item) => item.price >= 65000);
  if (filteredByPrice === "lower-65000")
    filteredData = [...cars].filter((item) => item.price <= 65000);

  if (filteredByCarName === "all") filteredData = filteredData;
  if (filteredByCarName !== "all")
    filteredData = [...filteredData].filter((item) =>
      item.name.startsWith(filteredByCarName)
    );

  // 2. Sort
  const sortBy = searchParams.get("sortBy") || "none";
  const [field, direction] = sortBy.split("-");
  const modifire = direction === "asc" ? 1 : -1;

  const sortedData = [...filteredData]?.sort(
    (a, b) => (b[field] - a[field]) * modifire
  );

  return (
    <>
      <StyledContainer className="grid">
        <Toaster />
        <div>
          <SideFilter />
        </div>

        <div>
          <div className="flex gap-1">
            <p className="py-2 mb-3 mt-1 w-1/2 flex justify-center bg-slate-700 text-white rounded-r-xl">
              بهترین هارا
            </p>
            <p className="py-2 mb-3 mt-1 w-1/2 flex justify-center bg-slate-700 text-white rounded-l-xl">
              از ما بخواهید
            </p>
          </div>

          <div className="flex justify-center mx-auto items-center bg-teal-s900 px-3 rounded-xl">
            <div className="flex gap-x-4 gap-y-4 flex-wrap items-center grow-0 justify-center bg-stone-50 py-4 px-2 min-w-min rounded-xl shadow-xl">
              {sortedData.map((product) => (
                <ProductBox key={product.id} data={product}></ProductBox>
              ))}
            </div>
          </div>
        </div>
      </StyledContainer>
    </>
  );
}

export default Products;
