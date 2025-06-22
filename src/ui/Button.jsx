function Button({ text, type }) {
  return (
    <button
      type={type}
      className="border-none rounded-lg px-4 py-[2px] bg-slate-200 text-slate-600 text-[15px] font-[yekan_bakh] font-semibold "
    >
      + {text}
    </button>
  );
}

export default Button;
