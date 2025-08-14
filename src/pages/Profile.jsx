import { useUser } from "../features/authentication/useUser";
import { useOrders } from "../features/orders/useOrders";

function Profile() {
  const {
    user: { user },
  } = useUser();

  const { isLoading, orders } = useOrders();

  if (!isLoading) console.log(orders, isLoading);

  // <p>لیست سفارشات شما</p>
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-slate-400 ">
      <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-1 h-[20rem] overflow-y-scroll my-4 px-2">
        {!isLoading
          ? orders.data.map((order) => (
              <div className="w-[75%] md:w-full bg-slate-600 rounded-lg overflow-hidden flex gap-x-4 py-2 px-4 min-h-[3.3rem] sm:min-h-[4rem] text-sm sm:text-base">
                <div>
                  <p className="text-white">شماره سفارش: {order.id}</p>
                  <p className="text-white">تعداد محصول</p>
                </div>
                <div>
                  <p className="text-white">مجموع مبلغ: 0</p>
                  <p className="text-white">وضعیت: تحویل داده شده</p>
                </div>
              </div>
            ))
          : null}
      </div>

      <form className="h-[50vh] flex w-1/2 flex-col justify-center items-center gap-3">
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="email"
            value={user.email}
            className=" w-[70%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          ایمیل
        </div>
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="tel"
            className="w-[65%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          شماره همراه
        </div>
      </form>
    </div>
  );
}

export default Profile;
