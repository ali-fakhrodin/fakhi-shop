import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 98%;
  height: 10rem;

  display: block;

  background-color: var(--color-dark);
  border-radius: var(--radius-sm);
`;

function Footer() {
  return <StyledFooter className="mx-auto mt-6 mb-3"></StyledFooter>;
}

export default Footer;
