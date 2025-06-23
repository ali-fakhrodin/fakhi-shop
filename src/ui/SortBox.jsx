import FilterSortItem from "./FilterSortItem";

function SortBox() {
  return (
    <ul className="flex flex-col gap-3 h-1/2 overflow-auto">
      <p>مرتب سازی بر اساس</p>
      <FilterSortItem name="قیمت" value="none">
        <option value="none">انتخاب نشده</option>
        <option value={1000}>ارزان ترین</option>
        <option value={1000}>گران ترین</option>
      </FilterSortItem>

      <FilterSortItem name="فروش" value="none">
        <option value="none">انتخاب نشده</option>
        <option value="none">پر فروش ترین</option>
        <option value="green">کم فروش ترین</option>
      </FilterSortItem>

      <FilterSortItem name="امتیاز" value="none">
        <option value="none">انتخاب نشده</option>

        <option value="highScore">بیشترین امتیاز</option>
        <option value="lowScore">کمترین امتیاز</option>
      </FilterSortItem>
    </ul>
  );
}

export default SortBox;
