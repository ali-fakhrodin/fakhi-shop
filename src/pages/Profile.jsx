import { useUser } from "../features/authentication/useUser";

function Profile() {
  const {
    user: { user },
  } = useUser();
  console.log(user);
  return (
    <form className="h-[50vh] flex flex-col justify-center items-center gap-3">
      <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
        <input
          type="email"
          value={user.email}
          className=" w-full md:w-1/2 lg:w-1/4 py-2 px-3 rounded-md"
          dir="ltr"
        />
        ایمیل
      </div>
      <div className="flex items-center justify-center gap-2 w-full text-sm md:text-[16px]">
        <input
          type="tel"
          className="w-full md:w-1/2 lg:w-1/4 py-2 px-3 rounded-md"
          dir="ltr"
        />
        شماره همراه
      </div>
    </form>
  );
}

export default Profile;
