import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const FilterButton = styled.button`
  ${(props) =>
    props.active &&
    css`
      background-color: rgb(30, 143, 74);
    `}

  border-radius: 10px;
  font-weight: 500;
  /* font-size: 17px; */
  width: 100%;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
`;

function FilterBox({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currFilter = searchParams.get(filterField) || "all";

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col gap-y-3">
      {options.map((option) => (
        <FilterButton
          className="bg-neutral-500 hover:bg-green-800 "
          active={currFilter === option.value}
          // disabled={true}
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default FilterBox;
