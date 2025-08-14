import { useUser } from "../features/authentication/useUser";

function Profile() {
  const {
    user: { user },
  } = useUser();
  console.log(user);
  return (
    <div className="flex justify-around items-center bg-slate-400">
      <div className="w-1/2 flex items-center flex-col">
        <p>لیست سفارشات شما</p>
        <div className=" w-[80%] bg-slate-700 p-1 rounded-lg overflow-hidden flex flex-col gap-1">
          <p className="text-white">تعداد محصول</p>
          <p className="text-white">مجموع مبلغ: 0</p>
          <p className="text-white">وضعیت: تحویل داده شده</p>
        </div>
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
