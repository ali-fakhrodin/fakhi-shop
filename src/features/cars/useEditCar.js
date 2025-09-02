import { useMutation } from "@tanstack/react-query";
import { editCar as editCarApi } from "../../services/apiCars";

function useEditCar() {
  const { isLoading: isEditting, mutate: editCar } = useMutation({
    mutationFn: editCarApi(),
  });

  return { editCar, isEditting };
}

export default useEditCar;
