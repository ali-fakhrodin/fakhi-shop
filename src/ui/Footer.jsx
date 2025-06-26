import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 98%;
`;

function Footer() {
  return (
    <StyledFooter className="mx-auto mt-6 mb-3 bg-gray-700 z-10 h-60 rounded-xl flex px-8 py-20 justify-between text-gray-200 bottom-0d">
      <div className="w-1/4 text-center">
        <p>شبکه های مجازی</p>
        <div>ins whats tel eita</div>
      </div>
      <div className="w-1/4 text-center">لینک ها</div>
    </StyledFooter>
  );
}

export default Footer;
