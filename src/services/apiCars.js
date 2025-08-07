import supabase from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");
  if (error) {
    throw new Error("Cars could not be lodaed");
  }

  return data;
}

export async function createCar(newCar) {
  const { data, error } = await supabase
    .from("cars")
    .insert([
      {
        name: newCar.name,
        price: newCar.price,
        desc: newCar.desc,
        src: newCar.image,
      },
    ])
    .select();

  console.log(newCar);
  console.log("data", data);
  console.log("error", error);
}
