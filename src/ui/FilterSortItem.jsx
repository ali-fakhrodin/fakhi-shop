const selectClassName = "w-full text-slate-600 rounded-lg p-1";
function FilterSortItem({ name, children, value }) {
  return (
    <>
      <li className="w-full">
        <label>{name}</label>
        <select className={selectClassName} value={value} type="text">
          {children}
        </select>
      </li>
    </>
  );
}

export default FilterSortItem;
