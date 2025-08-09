import { useMutation } from "@tanstack/react-query";
import { createCar as createCarApi } from "../../services/apiCars";
import toast from "react-hot-toast";

export function useCreateCar() {
  const { mutate: createCar, isLoading } = useMutation({
    mutationFn: createCarApi,
    onSuccess: () => {
      toast.success("محصول شما با موفقیت آپلود شد");
      console.log(true);
    },
    onError: () => {
      toast.error("دوباره تلاش کنید");
      console.log(false);
    },
  });
  return { createCar, isLoading };
}
