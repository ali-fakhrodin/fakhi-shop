import { useMutation } from "@tanstack/react-query";
import { editCar as editCarApi } from "../../services/apiCars";

function useEditCar() {
  const { isLoading: isEditting, mutate: editCar } = useMutation({
    mutationFn: ({
      id,
      editedSrc,
      editedName,
      editedPrice,
      editedDesc,
      hasNewImg,
    }) =>
      editCarApi({
        id,
        editedSrc,
        editedName,
        editedPrice,
        editedDesc,
        hasNewImg,
      }),
  });

  return { editCar, isEditting };
}

export default useEditCar;
