import { useMutation } from "@tanstack/react-query";
import { deleteCar as deleteCarApi } from "../../services/apiCars";
import Swal from "sweetalert2";

export function useDeleteCar() {
  const {
    mutate: deleteCar,
    isLoading: isDeleting,
    data,
  } = useMutation({
    mutationFn: ({ id, src }) => deleteCarApi({ id, src }),
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        toast: true,
        showConfirmButton: false,
        text: `ماشین مورد نظر با موفقیت حذف شد`,
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
    },
    onError: () => {
      Swal.fire({
        position: "top-end",
        toast: true,
        showConfirmButton: false,
        text: `دوباره تلاش کنید`,
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    },
  });
  return { deleteCar, isDeleting, data };
}
