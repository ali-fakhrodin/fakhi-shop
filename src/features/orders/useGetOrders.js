import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

export function useGetOrders() {
  const {data, error} = useQuery({
    queryFn: getOrders,
    queryKey: ["orders"]
  });

  return {data, error}
}
