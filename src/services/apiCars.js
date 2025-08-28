import supabase, { supabaseUrl } from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");
  if (error) {
    throw new Error("Cars could not be lodaed");
  }

  return data;
}

export async function createCar(newCar) {
  const imageName = `${Math.random()}-${newCar.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/fakhi-shop/${imageName}`;

  // console.log(imagePath);
  // 1. Create new car

  const { data, error } = await supabase
    .from("cars")
    .insert([
      {
        name: newCar.name,
        price: newCar.price,
        desc: newCar.desc,
        src: imagePath,
        score: 5,
      },
    ])
    .select();

  // 2. Save car image

  const { error: storageError } = await supabase.storage
    .from("fakhi-shop")
    .upload(imageName, newCar.image);
}

// Delete car

export async function deleteCar() {
  const { error, data } = await supabase.from("cars").delete().eq("id", "");
}
