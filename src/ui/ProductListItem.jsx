import { BiEdit, BiTrash } from "react-icons/bi";
import { useDeleteCar } from "../features/cars/useDeleteCar";
import Swal from "sweetalert2";

function ProductListItem({ data }) {
  const { deleteCar, isDeleting } = useDeleteCar();

  function handleDeleteCar() {
    Swal.fire({
      text: "آیا از حذف ماشین مطمئنی؟",
      confirmButtonText: "حذف",
      showCancelButton: true,
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar(data.id);
        Swal.fire("حذف شد", "", "success");
      }
    });
  }
  function handleEditCar() {
    Swal.fire({
      input: true,
      showCancelButton: true,
      confirmButtonText: "تایید",
      cancelButtonText: "لغو",
      html: `<div class='flex flex-col items-center gap-2 '>
      <input name='car' class='w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200' autofocus placeHolder='اسم ماشین'/>
      <input name='price' class='w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200' autofocus placeHolder='قمیت'/>
      <textarea name='desc' class='w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200' autofocus placeHolder='توضیحات'> d</textarea>
      <input name='img' type="file" class='w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200' autofocus placeHolder='تصویر'/>
      </div>`,
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
