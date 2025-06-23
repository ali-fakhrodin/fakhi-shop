// const filters = [
//      {price: []},
// ]

import FilterSortItem from "./FilterSortItem";

function FilterBox() {
  return (
    <ul className="flex flex-col gap-3 h-1/2 overflow-auto">
      <p>فیلتر بر اساس</p>
      <FilterSortItem name="بازه قیمت" value="none">
        <option value="none">انتخاب نشده</option>
        <option value={1000}>1000 تا 10000</option>
        <option value={10000}>10000 تا 20000</option>
        <option value={20000}>20000 تا 50000</option>
        <option value={100000}>بالای 100000</option>
      </FilterSortItem>

      <FilterSortItem name="رنگ بندی" value="none">
        <option value="none">انتخاب نشده</option>
        <option value="green">سبز</option>
        <option value="purple">بنفش</option>
        <option value="white">سفید</option>
        <option value="black">مشکی</option>
        <option value="red">قرمز</option>
      </FilterSortItem>

      <FilterSortItem name="سال ساخت" value="none">
        <option value="none">انتخاب نشده</option>
        <option value={"down"}>پایین 1380</option>
        <option value={1380}>1380 تا 1390</option>
        <option value={1390}>1390 تا 1400</option>
        <option value={1400}>بالای 1400</option>
      </FilterSortItem>
    </ul>
  );
}

export default FilterBox;
