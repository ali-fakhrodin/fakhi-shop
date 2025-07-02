import styled from "styled-components";
import Button from "./Button";
import supabase from "../services/supabase";

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

 async function addToBasket() {
  const { data, error } = await supabase
  .from('cars')
  .update({ count: 0 })
  .eq('id', '1')
  .select()

  console.log(data)
}

function ProductBox({ data }) {
  const { name, price, src, desc, count } = data;
  return (
    <StyledContainer className="overflow-hidden rounded-xl w-full sm:w-56 xl:w-56 bg-slate-600 text-gray-200 shadow-md cursor-pointer">
      <StyledImg src={src} className="block object-cover w-full" />
      <StyledProductInfo className="flex justify-between items-center flex-col p-1 text-center mx-auto w-[90%] h-[38%]">
        <h3 className="font-[yekan-b] text-lg">{name}</h3>
        <StyledDesc>{desc.substring(0, 60)} ...</StyledDesc>
        <div className="w-full flex justify-between items-center">
          <p className="flex items-center h-10">{price}$</p>
          {count > 0 ? (
            <div className="flex">
              <div className="flex gap-3">
                <button className="bg-gray-900 hover:bg-gray-700 px-3 text-red-600 rounded-lg text-[19px]">
                  -
                </button>
                <p>{count}</p>
                <button className="bg-gray-900 hover:bg-gray-700 px-3 text-green-600 rounded-lg text-[19px]">
                  +
                </button>
              </div>
            </div>
          ) : (
            <Button
              text="افزودن به سبد +"
              style="addToBasket"
              onClick={() => addToBasket()}
            />
          )}
        </div>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default ProductBox;
