import styled from "styled-components";

const StyledTitle = styled.p`
  border-top-left-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
`;

function Title({ children }) {
  return (
    <StyledTitle className="bg-gray-600 text-gray-300 px-7 py-2 rounded-tl-xl rounded-br-md h-full">
      {children}
    </StyledTitle>
  );
}

export default Title;
