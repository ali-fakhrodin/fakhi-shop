import styled from "styled-components";

const StyledContainer = styled.div`
  height: 17em;
`;
const StyledImg = styled.img`
  height: 69%;
`;

const StyledProductInfo = styled.div``;

function BasketItem({ item }) {
  const { name, price, src } = item;
  console.log(item);

  return (
    <StyledContainer className="overflow-hidden rounded-xl w-full sm:w-56 xl:w-52 bg-slate-600 text-gray-200 shadow-md cursor-pointer">
      <StyledImg src={src} className="block object-cover w-full" />
      <StyledProductInfo className="flex justify-between items-center flex-col p-1 text-center mx-auto w-[90%] h-[30%]">
        <h3 className="font-[yekan-b] text-xl mt-[2px]">{name}</h3>
        <div className="w-full flex justify-between items-center">
          <p className="flex items-center py-1 shadow-2xl px-2 rounded-lg">
            <span className="h-full pl-1 pt-1">$</span>
            <span>{price}</span>
          </p>
          <div className="flex">
            <div className="flex gap-3">
              <button className="bg-gray-900 hover:bg-gray-700 px-3 text-red-600 rounded-lg text-[19px]">
                -
              </button>
              <p>1</p>
              <button className="bg-gray-900 hover:bg-gray-700 px-3 text-green-600 rounded-lg text-[19px]">
                +
              </button>
            </div>
          </div>
        </div>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default BasketItem;
