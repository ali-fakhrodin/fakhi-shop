import { Outlet, useLocation } from "react-router-dom";
import PageNav from "./PageNav";
import styled from "styled-components";
import Footer from "./Footer";

const Container = styled.div`
  margin-top: 5.5rem;
`;
function AppLayout() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="flex flex-col justify-between bg-neutral-200 h-full relative overflow-auto">
      <PageNav />
      <Container
        className={`mx-auto ${location.pathname === "/home" || "/" && "w-full"}`}
      >
        <Outlet />
      </Container>
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default AppLayout;
