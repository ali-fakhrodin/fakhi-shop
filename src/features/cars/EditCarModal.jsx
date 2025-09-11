import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../pages/Profile";
import { BiLoader, BiX } from "react-icons/bi";
import useEditCar from "./useEditCar";
import toast from "react-hot-toast";

function EditCarModal({ data }) {
  const { editCar, isEditting } = useEditCar();
  const { isOpenEditModal, setIsOpenEditModal } = useContext(ModalContext);
  const { id, src, name, price, desc } = data;

  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedDesc, setEditedDesc] = useState(desc);
  const [editedImg, setEditedImg] = useState(src);

  useEffect(() => {
    setEditedName(name);
    setEditedPrice(price);
    setEditedDesc(desc);
    setEditedImg(src);
  }, [data]);

  function submitEditBtn(e) {
    e.preventDefault();
    setIsOpenEditModal(false);
    editCar({
      id,
      editedName,
      editedPrice,
      editedDesc,
      editedImg,
      oldSrc: src,
    });
    setEditedName("");
    setEditedPrice("");
    setEditedDesc("");
    setEditedImg("");
  }

  if (isEditting)
    return (
      <p className="bg-slate-100 hover:bg-slate-500 hover:text-white flex justify-between items-center gap-2 py-2 rounded-lg absolute top-1/2 mx-auto p-2 px-5">
        <BiLoader /> در حال ویرایش
      </p>
    );
  if (!isOpenEditModal) return;
  return (
    <div>
      <form className="bg-white flex flex-col items-center gap-2 py-5 rounded-xl right-0 left-0 mx-auto top-1/4 w-[35%] absolute z-30">
        <BiX
          className="text-[1.5rem] text-red-800 absolute left-1 top-1 cursor-pointer"
          onClick={() => setIsOpenEditModal(false)}
        />
        <input
          disabled={isEditting}
          defaultValue={editedName}
          name="car"
          onChange={(e) => setEditedName(e.target.value)}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="اسم ماشین"
          autoFocus
        />
        <input
          disabled={isEditting}
          defaultValue={editedPrice}
          type="number"
          name="price"
          onChange={(e) => setEditedPrice(e.target.value)}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="قمیت"
        />
        <textarea
          disabled={isEditting}
          defaultValue={editedDesc}
          name="desc"
          onChange={(e) => setEditedDesc(e.target.value)}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="توضیحات"
        />

        <img
          name="img"
          src={editedImg}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          alt="تصویر"
        />

        <input
          disabled={isEditting}
          name="img"
          accept="image/*"
          type="file"
          className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="تصویر"
          onChange={(e) => setEditedImg(e.target)}
        />

        <div className="w-[80%] flex justify-evenly pt-2 gap-1">
          <button
            type="submit"
            onClick={submitEditBtn}
            className="bg-[green] hover:bg-green-500 text-white w-[60%] py-1 rounded-lg"
          >
            تایید
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsOpenEditModal(false);
            }}
            className="bg-slate-500 hover:bg-slate-400 text-white w-[35%] py-1 rounded-lg"
          >
            لغو
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCarModal;
