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

export async function deleteCar({ id, src }) {
  const { error, data } = await supabase.from("cars").delete().eq("id", id);

  const { error: bucketErr } = await supabase.storage
    .from("fakhi-shop")
    .remove([src.slice(77)]);
}

export async function editCar({
  id,
  editedImg,
  editedName,
  editedPrice,
  editedDesc,
  oldSrc,
}) {
  console.log(oldSrc);
  console.log(editedImg);

  const image = typeof editedImg === "string" ? editedImg : editedImg.files[0];
  // if (oldSrc !== editedImg) {
  const imageName = `${Math.random()}-${
    typeof image === "string" ? editedImg.image : editedImg.image.name
  }`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/fakhi-shop/${imageName}`;

  // Insert img
  const { error: storageError } = await supabase.storage
    .from("fakhi-shop")
    .upload(imageName, image);

  const { data, error } = await supabase
    .from("cars")
    .update({
      name: editedName,
      price: editedPrice,
      src: editedImg === oldSrc ? editedImg : imagePath,
      desc: editedDesc,
    })
    .eq("id", id)
    .select();
  // }

  console.log(oldSrc.slice(77));

  // Delete img
  const { error: bucketErr } = await supabase.storage
    .from("fakhi-shop")
    .remove([oldSrc.slice(77)]);
}
