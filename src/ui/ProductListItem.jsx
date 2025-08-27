import { BiEdit, BiTrash } from "react-icons/bi";

function ProductListItem() {
  return (
    <div className="bg-slate-100 hover:bg-slate-500 hover:text-white flex justify-between items-center gap-2 px-2 py-2 rounded-lg">
      <div className="flex gap-3">
        <p>پورشه</p>
        <p>قیمت</p>
      </div>

      <div className="flex gap-2">
        <button className="text-red-700 hover:text-red-200">
          <BiTrash />
        </button>
        <button className="">
          <BiEdit />
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;
