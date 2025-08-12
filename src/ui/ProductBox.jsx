import styled from "styled-components";
import Button from "./Button";
import { addToBasket } from "../services/apiBasket";
import { BiTrash } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import {
  useDecreaseItem,
  useIncreaseItem,
} from "../features/basket/useIncAndDec.js";

const StyledContainer = styled.div`
  height: 21rem;

  @media screen and (max-width: 768px) {
    height: 18rem;
  }
`;
const StyledImg = styled.img`
  height: 62%;
  @media screen and (max-width: 768px) {
    height: 66%;
  }
`;

const StyledProductInfo = styled.div``;

const StyledDesc = styled.div`
  height: 50px;
  overflow: hidden;
`;

function ProductBox({ data }) {
  const { id, name, price, src, desc, count } = data;
  const queryClient = useQueryClient();
  const { incItem, isLoading: isIncreasing } = useIncreaseItem();
  const { decItem, isLoading: isDecreasing } = useDecreaseItem();

  return (
    <StyledContainer className="overflow-hidden rounded-xl w-44 sm:w-52 xl:w-56 bg-slate-600 text-gray-200 shadow-md cursor-pointer">
      <StyledImg src={src} className="block object-cover w-full" />
      <StyledProductInfo className="flex justify-between items-center flex-col p-1 text-center mx-auto w-[90%] h-[34%] md:h-[38%]">
        <h3 className="font-[yekan-b] md:text-lg text-md">{name}</h3>
        <StyledDesc className="text-[15px] md:text-lg">
          {desc?.substring(0, 60)} ...
        </StyledDesc>
        <div className="w-full flex justify-between items-center text-[15px]">
          <p className="flex items-center h-10">{price}$</p>
          {count > 0 ? (
            <div className="flex">
              <div className="flex gap-3">
                <button
                  className="bg-gray-900 hover:bg-gray-700 px-3 text-red-600 rounded-lg text-[19px]"
                  onClick={() => {
                    decItem({ id, count });
                    queryClient.invalidateQueries();
                  }}
                >
                  {count === 1 ? <BiTrash className="text-sm" /> : "-"}
                </button>

                <p>{isIncreasing || isDecreasing ? "..." : count}</p>

                <button
                  disabled={isIncreasing}
                  className="bg-gray-900 hover:bg-gray-700 px-3 text-green-600 rounded-lg text-[19px]"
                  onClick={() => {
                    incItem({ id, count });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ) : (
            <Button
              text="افزودن به سبد +"
              style="addToBasket"
              onClick={() => {
                addToBasket(id);
                queryClient.invalidateQueries();
              }}
            />
          )}
        </div>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default ProductBox;
