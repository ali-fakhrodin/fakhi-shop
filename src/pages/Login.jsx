import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import SignupForm from "../features/authentication/SignupForm";

const StyledContainer = styled.div`
  height: 95vh;
`;

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <StyledContainer className="">
      <Toaster />
      <div className="fixed flex gap-1 left-0 right-0 top-16 mx-auto w-max">
        <button
          className={` px-5 py-1 rounded-lg ${
            isLogin && "bg-green-600 text-white"
          }`}
          onClick={() => setIsLogin(true)}
        >
          ورود
        </button>
        <button
          className={` px-5 py-1 rounded-lg ${
            !isLogin && "bg-green-600 text-white"
          }`}
          onClick={() => setIsLogin(false)}
        >
          ثبت نام
        </button>
      </div>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </StyledContainer>
  );
}

export default Login;
