import { useMutation } from "@tanstack/react-query";
import { createCar as createCarApi } from "../../services/apiCars";

export function useCreateCar() {
  const { mutate: createCar, isLoading } = useMutation({
    mutationFn: createCarApi,
    onSuccess: () => {},
  });
  return { createCar, isLoading };
}
