import { useState } from "react";
import styled from "styled-components";
import FilterBox from "../../../ui/FilterBox";

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
        <FilterBox />
      </div>
    </StyledContainer>
  );
}

export default SideFilter;
