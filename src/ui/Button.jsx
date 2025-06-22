import styled from "styled-components";

const StyledBtn = styled.button`
  color: var(--color-white);
`;

function Button({ text, type }) {
  return (
    <StyledBtn
      type={type}
      className="border-none rounded-lg px-4 py-[2px] bg-green-800 bg-opacity-80 "
    >
      + {text}
    </StyledBtn>
  );
}

export default Button;
