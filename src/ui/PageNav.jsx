import { BiBasket, BiCar, BiHome, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";

const liClassname =
  "flex items-center bg-slate-600 text-slate-200 px-5 py-4 rounded-lg hover:bg-slate-700 flex items-center gap-2";

function PageNav() {
  return (
    <>
      <div className="w-[95%] mx-auto bg-slate-600 px-4 py-1 rounded-xl flex justify-between fixed top-4 right-0 left-0 z-10 ">
        <div className="flex items-center">
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
        </div>

        <div className="flex items-center">
          <div className="ml-4">
            <SearchBox />
          </div>
          <div className={liClassname}>
            <NavLink to="login">ورود / ثبت نام</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNav;
