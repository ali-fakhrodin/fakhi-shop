import FilterBox from "../../ui/FilterBox";
import SortBox from "../../ui/SortBox";

function SideFilter() {
  return (
    <div className="mt-5 sticky top-24">
      <p className="mb-2 font-[600] text-sm text-center">فیلتر / مرتب سازی</p>
      <div className="bg-slate-800 h-full shadow-xl rounded-xl text-white px-4 pt-2 pb-8">
        <p className="mb-3">فیلتر بر اساس</p>
        <FilterBox
          options={[
            { value: "all", label: "بدون فیلتر" },
            { value: "lower-65000", label: "زیر 65000" },
            { value: "higher-65000", label: "بالای 65000" },
          ]}
          filterField="price"
        />

        <br />

        <p className="mb-3">مرتب سازی بر اساس</p>
        <SortBox />
      </div>
    </div>
  );
}

export default SideFilter;
