import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSingup() {
  const {
    mutate: singup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: singupApi,
    onError: () => {
      toast.error("Account could not be created");
    },
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account successfuly created");
    },
  });

  if (error) throw new Error("Could not sing up");

  return { singup, isLoading };
}
