// import BasketItem from "../features/basket/BasketItem";
import toast, { Toaster } from "react-hot-toast";
import { useCars } from "../features/cars/useCars";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import ProductBox from "../ui/ProductBox";
import { useClearBasket } from "../features/basket/useClearBasket";
import { useQueryClient } from "@tanstack/react-query";
import { useGetOrders } from "../features/orders/useGetOrders";

function Basket() {
  const { isLoading, cars } = useCars();
  const { clearBasket, isLoading: isSubmitting, error } = useClearBasket();
  const { data: getOrders} = useGetOrders();

  const queryClient = useQueryClient();

  if (isLoading) return <Loading />;
  const basketItems = cars.filter((car) => car.count > 0);
  const totalPrice = basketItems.reduce((a, b) => a + b.price * b.count, 0);
  const isCarInBasket = basketItems.length !== 0;
  function submitBasket() {
    if (error) return;

    queryClient.invalidateQueries();
    console.log(getOrders);
    // clearBasket();
  }

  return (
    <div>
      <Toaster />
      {isSubmitting && (
        <p className="fixed top-1/3 bottom-1/3 left-0 right-0 text-center w-full">
          منتظر بمانید...
        </p>
      )}
      {!isCarInBasket && (
        <p className="text-xl w-full h-[47vh] flex justify-center items-center">
          سبد خرید شما خالی است
        </p>
      )}
      <div className="flex gap-x-5 gap-y-4 mt-6 flex-wrap items-center justify-end">
        {basketItems.map((item) => (
          <ProductBox key={item.id} data={item}></ProductBox>
        ))}
      </div>
      {isCarInBasket && (
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
              onClick={submitBasket}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
