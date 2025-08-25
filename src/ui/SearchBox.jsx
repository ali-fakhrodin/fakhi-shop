import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function searchInCars() {
    searchParams.set("carName", searchParam);
    setSearchParams(searchParams);
  }

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="جست و جوی ماشین ..."
        className="rounded-lg md:w-44 xl:w-72 text-md pr-8 tracking-wider"
        value={searchParam}
        onChange={(e) => {
          window.location.pathname !== "/products" && navigate("/products");
          setSearchParam(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") searchInCars();
          if(e.target.value === "") searchInCars()
        }}
      />
      <button
        className="absolute z-10 text-slate-100 bg-slate-700 top-0 right-0 bottom-0 px-1"
        onClick={searchInCars}
      >
        <BiSearch className="size-5" />
      </button>
    </div>
  );
}

export default SearchBox;
