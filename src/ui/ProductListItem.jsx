import { BiEdit, BiTrash } from "react-icons/bi";
import { useDeleteCar } from "../features/cars/useDeleteCar";
import Swal from "sweetalert2";
import useEditCar from "../features/cars/useEditCar";
import { useState } from "react";
import withReactContent from "sweetalert2-react-content";

function ProductListItem({ data }) {
  const { deleteCar, isDeleting } = useDeleteCar();
  const { editCar, isEditting } = useEditCar();
  const { id, src, name, price, desc } = data;

  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedDesc, setEditedDesc] = useState(desc);
  const [editedSrc, setEditedSrc] = useState(src);
  console.log(editedName);

  function handleDeleteCar() {
    Swal.fire({
      text: "آیا از حذف ماشین مطمئنی؟",
      confirmButtonText: "حذف",
      showCancelButton: true,
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar({ id, src });
      }
    });
  }
  function handleEditCar() {
    withReactContent(Swal)
      .fire({
        title: "ویرایش محصول",
        showCancelButton: true,
        confirmButtonText: "تایید",
        cancelButtonText: "لغو",
        html: (
          <div className="flex flex-col items-center gap-2 ">
            <input
              defaultValue={editedName}
              name="car"
              onChange={(e) => setEditedName(e.target.value)}
              className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
              placeholder="اسم ماشین"
              autoFocus
            />
            <input
              defaultValue={editedPrice}
              name="price"
              onChange={(e) => setEditedPrice(e.target.value)}
              className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
              placeholder="قمیت"
            />
            <textarea
              defaultValue={editedDesc}
              name="desc"
              onChange={(e) => setEditedDesc(e.target.value)}
              className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
              placeholder="توضیحات"
            />

            <img
              name="img"
              src={editedSrc}
              onChange={(e) => setEditedSrc(e.target.src)}
              className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
              alt="تصویر"
            />

            <input
              name="img"
              accept="image/*"
              type="file"
              className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
              placeholder="تصویر"
            />
          </div>
        ),
      })
      .then((result) => {
        if (result.isConfirmed) editCar({ id, src, desc, editedName, price });
      });
  }

  return (
    <div className="bg-slate-100 hover:bg-slate-500 hover:text-white flex justify-between items-center gap-2 px-2 py-2 rounded-lg">
      <div className="flex gap-3 text-[15px]">
        <p>{data.name}</p>
        <p>قیمت: {data.price}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="text-red-700 hover:text-red-200"
          onClick={handleDeleteCar}
          type="button"
        >
          <BiTrash />
        </button>
        <button className="" type="button" onClick={handleEditCar}>
          <BiEdit />
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;
