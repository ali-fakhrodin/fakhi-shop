import styled from "styled-components";
import SideFilter from "../features/basket/filter/SideFilter";
import SwiperBox from "../ui/SwiperBox";

const StyledContainer = styled.div`
  grid-template-columns: 2fr 10fr;
`;

function Home() {
  return (
    <StyledContainer className="grid">
      <div>
        <SideFilter></SideFilter>
      </div>
      <div>
        <SwiperBox title="بیشترین تخفیف" path="/products"></SwiperBox>
        <SwiperBox title="کالای مورد علاقه" path="/products"></SwiperBox>
        <SwiperBox title="خریدی به صرفه" path="/products"></SwiperBox>
      </div>
    </StyledContainer>
  );
}

export default Home;
