import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  decItem as decItemApi,
  incItem as incItemApi,
} from "../../services/apiBasket";

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

    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { decItem, isLoading };
}
