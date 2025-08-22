import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function searchInCars() {
    searchParams.set("carName", "نیسان");
    setSearchParams(searchParams);

    window.location.pathname !== "/products" && navigate("/products");
  }

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="جست و جوی ماشین ..."
        className="rounded-lg md:w-44 xl:w-72 text-md pr-7 py-1 tracking-wider"
        onKeyDown={searchInCars}
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button className="absolute z-10 text-slate-600 top-[20%] right-1 size-5">
        <BiSearch className="size-5" />
      </button>
    </div>
  );
}

export default SearchBox;
