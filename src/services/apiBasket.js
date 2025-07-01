import supabase from "./supabase";

export async function getBasket() {
  let { data, error } = await supabase.from("basket").select("*");
  if (error) {
    throw new Error("Basket items could not be loaded");
  }

  return data;
}
