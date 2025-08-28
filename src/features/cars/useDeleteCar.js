import { useMutation } from "@tanstack/react-query";
import { deleteCar as deleteCarApi } from "../../services/apiCars";

function useDeleteCar() {
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteCarApi(),
  });
}
