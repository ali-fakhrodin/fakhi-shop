import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onError: (err) => {
      console.log(err);
      navigate("/login");
    },
    onSuccess: () => {
      navigate("/home");
      console.log('s');
    },
  });

  return { login, isLoading };
}
