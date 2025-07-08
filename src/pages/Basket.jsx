// import BasketItem from "../features/basket/BasketItem";
// import { useBasket } from "../features/basket/useBasket";
// import Loading from "../ui/Loading";
// import ProductBox from "../ui/ProductBox";

function Basket() {
  // const { isLoading, basket } = useBasket();

  // if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-center">
        سبد خرید
        {/* {basket.map((item) => (
          <ProductBox key={item.id} data={item}></ProductBox>
        ))} */}
      </div>
    </div>
  );
}

export default Basket;
