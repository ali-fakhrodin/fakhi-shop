import { useQuery } from "@tanstack/react-query";
import { getBasket } from "../../services/apiBasket";

export function useBasket() {
  const {
    isLoading,
    data: basket,
    error,
  } = useQuery({
    queryKey: ["basket"],
    queryFn: getBasket,
  });

  return { isLoading, basket, error };
}
