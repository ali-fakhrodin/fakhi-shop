import { useState } from "react";
import styled from "styled-components";
import FilterBox from "../../../ui/FilterBox";
import SortBox from "../../../ui/SortBox";

function SideFilter() {
  const [height, setHeight] = useState(document.body.clientHeight - 160);
  document.addEventListener("scroll", () => {
    setHeight(document.body.clientHeight - 160);
  });

  const StyledContainer = styled.div`
    height: ${height}px;
  `;
  
  return (
    <StyledContainer className="mt-4 fixed w-[14%] ">
      <p className="mb-3 font-[600] text-center">فیلتر / مرتب سازی</p>
      <div className="bg-slate-800 h-full shadow-xl rounded-xl text-white px-4 py-2">
        <p className="mb-3">فیلتر بر اساس</p>
        <FilterBox
          options={[
            { value: "lower-65000", label: "زیر 65000" },
            { value: "higher-65000", label: "بالای 65000" },
          ]}
          filterField="price"
        />

          <br/>

        <p className="mb-3">مرتب سازی بر اساس</p>
        <SortBox />
      </div>
    </StyledContainer>
  );
}

export default SideFilter;
