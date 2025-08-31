import { useMutation } from "@tanstack/react-query";
import { deleteCar as deleteCarApi } from "../../services/apiCars";

export function useDeleteCar() {
  const { mutate: deleteCar, isLoading: isDeleting } = useMutation({
    mutationFn: ({id, src}) => deleteCarApi({id, src}),
  });
  return { deleteCar, isDeleting };
}
