import { useMutation } from "@tanstack/react-query";
import { clearBasket as clearBasketApi } from "../../services/apiBasket";
import toast from "react-hot-toast";

export function useClearBasket() {
  const {
    mutate: clearBasket,
    error,
    isLoading,
  } = useMutation({
    mutationFn: clearBasketApi,
    onSuccess: () => {
      toast.success("خرید شما با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("لطفا دوباره امتحان کنید!");
    },
  });

  return { clearBasket, isLoading, error };
}
