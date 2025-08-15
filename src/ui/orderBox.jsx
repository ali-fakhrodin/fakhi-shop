import { format, formatDate } from "date-fns";

function OrderBox({ data }) {
  const formatedDate = format(new Date(data.created_at), "yyyy/MM/dd");
  return (
    <div className="w-full sm:w-[95%] md:w-full bg-slate-600 rounded-lg overflow-hidden flex gap-x-1 items-center sm:gap-x-4 py-2 px-4 min-h-[3.3rem] h-auto sm:min-h-[4rem] text-[12px] sm:text-sm lg:text-base">
      <div>
        <p className="text-white">شماره سفارش: {data.id}</p>
        <p className="text-white">تعداد محصول: {data.numberOfProducts}</p>
      </div>
      <div>
        <p className="text-white">مجموع مبلغ: {data.orderCost}</p>
        <p className="text-white">وضعیت: {data.orderStatus}</p>
      </div>
      <p className="text-zinc-200 self-center flex-grow text-left">{formatedDate}</p>
    </div>
  );
}

export default OrderBox;
