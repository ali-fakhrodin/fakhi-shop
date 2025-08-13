import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToBasket as addToBasketApi } from "../../services/apiBasket";
import toast from "react-hot-toast";

export function useAddInBasket() {
  const queryClient = useQueryClient();
  const { mutate: addToBasket, isLoading } = useMutation({
    mutationFn: addToBasketApi,
    onSuccess: () => {
      toast.success("محصول به سبد خرید شما اضافه شد");
      queryClient.invalidateQueries();
      console.log("Successfuly added")
    },
  });
  return { addToBasket, isLoading };
}
