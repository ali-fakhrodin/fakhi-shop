function Button({ text = "text", type = "button", style = "primary" }) {
  const mainClassName = "border-none rounded-lg px-4 py-[2px] text-[15px]";
  const className =
    style === "addToBasket"
      ? "bg-slate-200 text-slate-600 font-semibold"
      : style === "primary"
      ? "bg-green-600 text-white w-[50%] hover:bg-slate-600 h-10"
      : style === "secondary"
      ? ""
      : "";

  return (
    <button type={type} className={mainClassName + " " + className}>
      {text}
    </button>
  );
}

export default Button;
