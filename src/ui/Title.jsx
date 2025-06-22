import styled from "styled-components";

const StyledTitle = styled.p`
  border-top-left-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
`;

function Title({ children }) {
  return (
    <StyledTitle className="bg-gray-600 text-gray-300 inline-block mt-5 mb-3 px-7 py-1 rounded-tl-xl rounded-br-md">
      {children}
    </StyledTitle>
  );
}

export default Title;
