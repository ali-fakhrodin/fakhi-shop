import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const StyledContainer = styled.div`
  height: calc(100vh - 300px - 64px);
`

function Login() {
  return (
    <StyledContainer className="">
      <LoginForm/>
    </StyledContainer>
  );
}

export default Login;
