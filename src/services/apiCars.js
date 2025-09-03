import supabase, { supabaseUrl } from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");
  await supabase.storage
    .from("fakhi-shop")
    .remove(["object-path-2", "folder/avatar2.png"]);

  if (error) {
    throw new Error("Cars could not be lodaed");
  }

  return data;
}

export async function createCar(newCar) {
  const imageName = `${Math.random()}-${newCar.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/fakhi-shop/${imageName}`;

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

export async function deleteCar({ id, src }) {
  const { error, data } = await supabase.from("cars").delete().eq("id", id);

  const { error: bucketErr } = await supabase.storage
    .from("fakhi-shop")
    .remove([src.slice(77)]);
}

export async function editCar({
  id,
  editedSrc,
  editedName,
  editedPrice,
  editedDesc,
  hasNewImg,
}) {
  // Delete img
  if (hasNewImg) {
    const { error: bucketErr } = await supabase.storage
      .from("fakhi-shop")
      .remove([src.slice(77)]);
  }

  const { data, error } = await supabase
    .from("cars")
    .update({ editedName, editedPrice, editedSrc, editedDesc, hasNewImg })
    .eq("id", id)
    .select();

  console.log(hasNewImg);
  // console.log(editedName)
}
