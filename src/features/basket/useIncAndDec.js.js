import { useMutation } from "@tanstack/react-query";
import {
  decItem as decItemApi,
  incItem as incItemApi,
} from "../../services/apiBasket";

export function useIncreaseItem() {
  const { mutate: incItem, isLoading } = useMutation({
    mutationFn: ({ id, count }) => {
      incItemApi(id, count);
      console.log(isLoading);
    },

    onSuccess: () => {
      console.log("success Inc");
    },
  });
  return { incItem, isLoading };
}

export function useDecreaseItem() {
  const { mutate: decItem, isLoading } = useMutation({
    mutationFn: ({ id, count }) => {
      decItemApi(id, count);
      console.log(isLoading);
    },
    onSuccess: () => {},
  });
  return { decItem, isLoading };
}
