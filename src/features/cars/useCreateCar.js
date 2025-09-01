import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCar as createCarApi } from "../../services/apiCars";
import toast from "react-hot-toast";

export function useCreateCar() {
  const queryClient = useQueryClient()
  const { mutate: createCar, isLoading } = useMutation({
    mutationFn: createCarApi,
    onSuccess: () => {
      toast.success("محصول شما با موفقیت آپلود شد");
      queryClient.invalidateQueries()
    },
    onError: () => {
      toast.error("دوباره تلاش کنید");
    },
  });
  return { createCar, isLoading };
}
