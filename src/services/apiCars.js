import supabase from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");
  if (error) {
    throw new Error("Cars could not be lodaed");
  }

  return data;
}
