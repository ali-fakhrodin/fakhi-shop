import supabase from "./supabase";

// export async function getBasket() {
//   let { data, error } = await supabase.from("basket").select("*");
//   if (error) {
//     throw new Error("Basket items could not be loaded");
//   }

//   return data;
// }

export async function addToBasket(id) {
  const { data, error } = await supabase
    .from("cars")
    .update({ count: 1 })
    .eq("id", id)
    .select();
}

export async function incItem(id, count) {
  const { data, error } = await supabase
    .from("cars")
    .update({ count: count + 1 })
    .eq("id", id)
    .select();
  console.log(data, count);
}

export async function decItem(id, count) {
  const { data, error } = await supabase
    .from("cars")
    .update({ count: count - 1 })
    .eq("id", id)
    .select();
}
