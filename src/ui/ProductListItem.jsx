import { BiEdit, BiTrash } from "react-icons/bi";
import { useDeleteCar } from "../features/cars/useDeleteCar";
import Swal from "sweetalert2";
import useEditCar from "../features/cars/useEditCar";
import { useContext, useState } from "react";
import { ModalContext } from "../pages/Profile";

function ProductListItem({ data }) {
  const { isOpenEditModal, setIsOpenEditModal, setModalData } =
    useContext(ModalContext);
  const { id, src, name, price, desc } = data;

  const { deleteCar, isDeleting } = useDeleteCar();
  // console.log(id, src, name, price, desc);

  function handleEditCar() {
    setIsOpenEditModal(true);
    setModalData(data);
  }

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

  return (
    <div className="bg-slate-100 hover:bg-slate-500 hover:text-white flex justify-between items-center gap-2 px-2 py-2 rounded-lg">
      <div className="flex gap-3 text-[15px]">
        <p>{name}</p>
        <p>قیمت: {price}</p>
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
