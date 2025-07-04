import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 98%;
`;

function Footer() {
  return (
    <StyledFooter className="mx-auto mt-6 mb-3 bg-gray-700 z-10 rounded-xl px-8 pb-16 pt-8 text-gray-200">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between ">
        <div className="w-full sm:w-1/4 text-center">
          <p>شبکه های مجازی</p>
          <div className="flex gap-3 text-lg mt-2 justify-center">
            <BsInstagram /> <BsWhatsapp /> <BsTelegram />
          </div>
        </div>

        <div
          className="flex gap-16 w-full sm:w-1/4 my-4 sm:my-0"
        >
          <div className="w-full sm:w-1/2 md:w-1/4 text-center flex flex-col">
            <a>ورود</a>
            <a>ثبت نام</a>
            <a>درباره ما</a>
            <a>مشاوره رایگان</a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 text-center flex flex-col">
            <a>خانه</a>
            <a>سبد خرید</a>
            <a>محصولات</a>
            <a>پروفایل</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-1">
        <button
          type="submit"
          className="bg-slate-200 text-slate-600 px-2 rounded-xl hover:bg-lime-600 hover:text-white"
        >
          تایید
        </button>
        <input
          dir="ltr"
          type="email"
          className="rounded-xl px-3 py-1 w-1/2 sm:w-1/4 text-md"
          placeholder="Enter your email"
        />
      </div>
    </StyledFooter>
  );
}

export default Footer;
