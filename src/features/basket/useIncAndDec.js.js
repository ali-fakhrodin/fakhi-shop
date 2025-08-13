import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  decItem as decItemApi,
  incItem as incItemApi,
} from "../../services/apiBasket";
import toast from "react-hot-toast";

export function useIncreaseItem() {
  const queryClient = useQueryClient();
  const { mutate: incItem, isLoading } = useMutation({
    mutationFn: ({ id, count }) => incItemApi(id, count),

    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { incItem, isLoading };
}

export function useDecreaseItem() {
  const queryClient = useQueryClient();
  const { mutate: decItem, isLoading } = useMutation({
    mutationFn: ({ id, count }) => decItemApi(id, count),

    onSuccess: ({ data: currentCar }) => {
      queryClient.invalidateQueries();

      if (currentCar[0].count === 0)
        toast.success("محصول مورد نظر از سبد حذف شد");
    },
  });
  return { decItem, isLoading };
}
