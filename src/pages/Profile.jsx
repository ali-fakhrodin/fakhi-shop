import { useUser } from "../features/authentication/useUser";
import { useOrders } from "../features/orders/useOrders";
import OrderBox from "../ui/orderBox";

function Profile() {
  const {
    user: { user },
  } = useUser();

  const { isLoading, orders } = useOrders();

  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-slate-400 h-[54vh] mt-4 rounded-xl overflow-y-scroll">
      <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-1 h-[23rem] overflow-y-scroll px-4">
        {!isLoading
          ? orders.data.map((order) => <OrderBox data={order} />)
          : null}
      </div>

      <form className="h-[50vh] flex w-1/2 flex-col justify-center items-center gap-3">
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="email"
            value={user.email}
            className="w-[70%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          <span className="text-white">ایمیل</span>
        </div>
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="tel"
            className="w-[65%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          <span className="text-white">شماره همراه</span>
        </div>
      </form>
    </div>
  );
}

export default Profile;
