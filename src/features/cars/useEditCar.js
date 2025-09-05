import { useMutation } from "@tanstack/react-query";
import { editCar as editCarApi } from "../../services/apiCars";
import toast from "react-hot-toast";

function useEditCar() {
  const { isLoading: isEditting, mutate: editCar } = useMutation({
    mutationFn: editCarApi,
    onSuccess: () => {
      toast.success("ویرایش شد");
    },
  });

  return { editCar, isEditting };
}

export default useEditCar;
