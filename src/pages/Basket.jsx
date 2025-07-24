// import BasketItem from "../features/basket/BasketItem";
import { useCars } from "../features/cars/useCars";
import Loading from "../ui/Loading";
import ProductBox from "../ui/ProductBox";

function Basket() {
  const { isLoading, cars } = useCars();

  if (isLoading) return <Loading />;
  const basketItems = cars.filter((car) => car.count > 0);
  return (
    <div>
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-end">
        {basketItems.map((item) => (
          <ProductBox key={item.id} data={item}></ProductBox>
        ))}
      </div>
    </div>
  );
}

export default Basket;
