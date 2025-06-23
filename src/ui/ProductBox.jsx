import styled from "styled-components";
import Button from "./Button";

const StyledContainer = styled.div`
  height: 21rem;
`;
const StyledImg = styled.img`
  height: 60%;
`;

const StyledProductInfo = styled.div``;

const StyledDesc = styled.div`
  height: 50px;
  overflow: hidden;
`;

function ProductBox({ data }) {
  const { name, price, src, desc } = data;
  return (
    <StyledContainer className="overflow-hidden rounded-xl max-w-56 bg-slate-600 text-gray-200 shadow-md hover:scale-[1.03] transition-all cursor-pointer">
      <StyledImg src={src} className="block object-cover" />
      <StyledProductInfo className="flex justify-between items-center flex-col p-1 text-center mx-auto w-[90%] h-[39%]">
        <h3 className="font-[yekan-b] text-lg">{name}</h3>
        <StyledDesc>{desc.substring(0, 60)} ...</StyledDesc>
        <div className="w-full flex justify-between items-center">
          <p className="flex items-center h-10">{price}$</p>
          <Button text="افزودن به سبد +" style="addToBasket" />
        </div>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default ProductBox;
