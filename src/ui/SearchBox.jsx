import { BiSearch } from "react-icons/bi";

function SearchBox() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="جست و جوی ماشین ..."
        className="rounded-lg md:w-52 xl:w-72 text-md pr-7 py-1 tracking-wider"
      />
      <button className="absolute z-10 text-slate-600 top-[20%] right-1 size-5">
        <BiSearch className="size-5" />
      </button>
    </div>
  );
}

export default SearchBox;
