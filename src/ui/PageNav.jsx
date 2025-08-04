import {
  BiBasket,
  BiCar,
  BiExit,
  BiHome,
  BiPlus,
  BiUser,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useUser } from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";

const liClassname =
  "flex items-center bg-slate-600 text-slate-200 md:px-5 px-3 py-4 rounded-lg hover:bg-slate-700 flex items-center gap-2";

function PageNav() {
  const [isOpenNavabar, setIsOpenNavabar] = useState(false);
  const { user } = useUser();
  const { isLoading, logout } = useLogout();

  return (
    <>
      <div
        className={`w-[95%] mx-auto bg-slate-600 px-0 lg:px-2 py-1 rounded-xl flex justify-between flex-csol md:flex-row fixed top-4 right-0 left-0 z-10 ${
          isOpenNavabar && "flex-row"
        }`}
      >
        <button
          className={`visible md:hidden text-white p-2 text-2xl`}
          onClick={() => setIsOpenNavabar((isOpen) => !isOpen)}
        >
          {isOpenNavabar ? (
            <CgClose className="absolute top-4 right-3" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div
            className={`flex flex-col md:flex-row items-center ${
              isOpenNavabar ? "flex" : "hidden"
            } md:flex`}
          >
            <NavLink to="home" className={liClassname}>
              <BiHome className="block" /> <span>خانه</span>
            </NavLink>
            <NavLink to="basket" className={liClassname}>
              <BiBasket /> <span>سبد خرید</span>
            </NavLink>
            <NavLink to="products" className={liClassname}>
              <BiCar /> <span>محصولات</span>
            </NavLink>
            <NavLink to="profile" className={liClassname}>
              <BiUser /> <span>پروفایل</span>
            </NavLink>
            <NavLink to="addCar" className={liClassname}>
              <BiPlus />
              <span>فروش</span>
            </NavLink>
          </div>

          <div
            className={`flex md:flex-row items-center justify-center ${
              isOpenNavabar && "flex-col"
            }`}
          >
            <div className="ml-4">
              <SearchBox />
            </div>

            <div className={liClassname}>
              <NavLink to="login">
                {user?.user.role === "authenticated" ? (
                  <button
                    className="flex items-center gap-2 text-sm"
                    onClick={logout}
                    disabled={isLoading}
                  >
                    خروج
                    <BiExit className="rotate-180" />
                  </button>
                ) : (
                  "ورود / ثبت نام"
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNav;
