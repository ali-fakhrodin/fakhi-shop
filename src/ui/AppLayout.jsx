import { Outlet, useLocation } from "react-router-dom";
import PageNav from "./PageNav";
import styled from "styled-components";
import Footer from "./Footer";

const Container = styled.div`
  margin-top: 5.5rem;
`;
function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between  h-full relative overflow-auto bg-neutral-200 ">
      <PageNav />
      <Container
        className={`mx-auto ${
          location.pathname === "/home" ? "w-full" : "/" ? "" : ""
        }`}
      >
        <Outlet />
      </Container>
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default AppLayout;
