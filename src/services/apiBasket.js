import supabase from "./supabase";

export async function addToBasket(id) {
  const { data } = await supabase
    .from("cars")
    .update({ count: 1 })
    .eq("id", id)
    .select();
}

export async function incItem(id, count) {
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

  return { data };
}

export async function clearBasket() {
  const { data } = await supabase
    .from("cars")
    .update({ count: 0 })
    .neq("count", 0)
    .select("*");
}
