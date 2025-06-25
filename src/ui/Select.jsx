function Select({ options, value, onChange }) {
  return (
    <select
      className="w-full rounded-lg p-1 text-slate-800"
      value={value || "none"}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
