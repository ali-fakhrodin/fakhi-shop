// import FilterSortItem from "./FilterSortItem";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBox() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || null;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col gap-4">
      <Select
        options={[
          { value: "none", label: "قیمت - انتخاب نشده" },
          { value: "price-asc", label: "گران ترین" },
          { value: "price-desc", label: "ارزان ترین" },
        ]}
        value={sortBy}
        onChange={handleChange}
        className="flex flex-col gap-3 h-1/2 overflow-auto"
      />
      <Select
        options={[
          { value: "none", label: "امتیاز - انتخاب نشده" },
          { value: "score-asc", label: "بیشترین امتیاز" },
          { value: "score-desc", label: "کمترین امتیاز" },
        ]}
        value={sortBy}
        onChange={handleChange}
        className="flex flex-col gap-3 h-1/2 overflow-auto"
      />
    </div>
  );
}

export default SortBox;
