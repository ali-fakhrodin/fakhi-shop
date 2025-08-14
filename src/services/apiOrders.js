import supabase from "./supabase";

export async function getOrders() {
  let { data } = await supabase.from("orders").select("*");

  return { data };
}
