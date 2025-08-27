import { useUser } from "../features/authentication/useUser";
import { useOrders } from "../features/orders/useOrders";
import OrderBox from "../ui/orderBox";
import ProductListItem from "../ui/ProductListItem";

function Profile() {
  const {
    user: { user },
  } = useUser();

  const { isLoading, orders } = useOrders();

  return (
    <div className="flex flex-col gap-10 md:flex-row justify-around items-center bg-slate-400 min-h-[54vh] mt-4 rounded-xl overflow-y-scroll">
      <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-1 h-[17rem] mb-5 md:mb-0 md:h-[23rem] overflow-y-scroll py-4 px-4">
        {!isLoading
          ? orders.data.map((order) => <OrderBox data={order} />)
          : null}
      </div>

      <form className="h-[25vh] flex w-[100%] md:w-1/2 flex-col justify-center items-center gap-3">
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="text"
            value={user.user_metadata.fullName}
            className="w-[60%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          <span className="text-white">نام کاربری</span>
        </div>
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="email"
            value={user.email}
            className="w-[63%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          <span className="text-white">ایمیل</span>
        </div>
        <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
          <input
            type="tel"
            className="w-[58%] py-2 px-3 rounded-md"
            dir="ltr"
          />
          <span className="text-white">شماره همراه</span>
        </div>
        <div className="flex flex-col mt-3 gap-1 w-[70%]">
          <p className="bg-slate-900 text-white px-3 py-1 rounded-lg flex items-center gap-2">
            ماشین های آپلود شده
          </p>

          <div className="flex flex-col gap-1 max-h-[4rem] md:max-h-[80rem] mb-4 md:mb-0 overflow-y-auto">
            <ProductListItem />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
