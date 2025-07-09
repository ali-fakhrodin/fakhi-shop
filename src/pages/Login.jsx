import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import { Toaster } from "react-hot-toast";

const StyledContainer = styled.div`
  height: calc(100vh - 300px - 64px);
`;

function Login() {
  return (
    <StyledContainer className="">
      <Toaster />
      <LoginForm />
    </StyledContainer>
  );
}

export default Login;
