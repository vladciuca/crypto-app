import styled from "styled-components";

export const SearchContainer = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5.4rem;
`;

export const SearchBtn = styled.span`
  margin-left: 0.6rem;
`;

export const SearchInput = styled.input`
  background: transparent;
  color: white;
  border: none;
  border-bottom: 0.1rem solid #5b486a;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
