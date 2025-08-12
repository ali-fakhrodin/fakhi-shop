import supabase from "./supabase";

// export async function getBasket() {
//   let { data } = await supabase.from("basket").select("*");
//   if (error) {
//     throw new Error("Basket items could not be loaded");
//   }

//   return data;
// }

export async function addToBasket(id) {
  const { data } = await supabase
    .from("cars")
    .update({ count: 1 })
    .eq("id", id)
    .select();
}

export async function incItem(id, count) {
  console.log(id);
  console.log(count);
  
  const { data } = await supabase
    .from("cars")
    .update({ count: count + 1 })
    .eq("id", id)
    .select();
}

export async function decItem(id, count) {
  const { data } = await supabase
    .from("cars")
    .update({ count: count - 1 })
    .eq("id", id)
    .select();
}

export async function clearBasket() {
  const { data } = await supabase
    .from("cars")
    .update({ count: 0 })
    .neq("count", 0)
    .select("*");
}
