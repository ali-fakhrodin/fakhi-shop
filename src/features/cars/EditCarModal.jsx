import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../pages/Profile";
import { BiX } from "react-icons/bi";

function EditCarModal({ data }) {
  const { isOpenEditModal, setIsOpenEditModal } = useContext(ModalContext);
  const { src, name, price, desc } = data;

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

  if (!isOpenEditModal) return;
  return (
    <div>
      <form className="bg-white flex flex-col items-center gap-2 py-5 rounded-xl right-0 left-0 mx-auto top-1/4 w-[35%] absolute z-30">
        <BiX
          className="text-[1.5rem] text-red-800 absolute left-1 top-1 cursor-pointer"
          onClick={() => setIsOpenEditModal(false)}
        />
        <input
          defaultValue={editedName}
          name="car"
          onChange={(e) => setEditedName(e.target.value)}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="اسم ماشین"
          autoFocus
        />
        <input
          defaultValue={editedPrice}
          type="number"
          name="price"
          onChange={(e) => setEditedPrice(e.target.value)}
          className="w-[88%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="قمیت"
        />
        <textarea
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
          name="img"
          accept="image/*"
          type="file"
          className="w-[80%] px-2 py-1 rounded-lg text-md bg-slate-200"
          placeholder="تصویر"
          onChange={(e) => setEditedImg(e.target)}
        />
      </form>
    </div>
  );
}

export default EditCarModal;
