// import BasketItem from "../features/basket/BasketItem";
import { useCars } from "../features/cars/useCars";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import ProductBox from "../ui/ProductBox";

function Basket() {
  const { isLoading, cars } = useCars();

  if (isLoading) return <Loading />;
  const basketItems = cars.filter((car) => car.count > 0);
  const totalPrice = basketItems.reduce(
    (a, b) => a.price * a.count + b.price * b.count
  );

  return (
    <div>
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-end">
        {basketItems.map((item) => (
          <ProductBox key={item.id} data={item}></ProductBox>
        ))}
      </div>
      <div className="mt-8 mx-auto flex flex-col items-center">
        <div className="my-1 px-4 py-3 rounded-lg bg-slate-600 text-slate-100 w-full flex flex-col">
          <p className="py-1">
            هزینه ارسال<span className="mx-4 text-lg">0</span>
          </p>
          <p className="py-1">
            مجموع سبد خرید<span className="mx-4 text-lg">$ {totalPrice}</span>
          </p>
          <Button
            text="ثبت خرید"
            type="submit"
            style="primary"
            addClassName="mx-auto mt-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Basket;
