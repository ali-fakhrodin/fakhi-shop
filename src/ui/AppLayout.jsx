import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";
import styled from "styled-components";
import Footer from "./Footer";

const Container = styled.div`
  margin-top: 5.5rem;
  width: 90%;
`;
function AppLayout() {
  return (
    <div className="flex flex-col justify-between bg-neutral-100">
      <PageNav />
      <Container className="mx-auto">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default AppLayout;
