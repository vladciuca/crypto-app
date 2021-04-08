import styled from "styled-components";

export const SearchContainer = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5rem;
`;

export const SearchBtn = styled.span`
  margin-left: 1rem;
`;

export const SearchInput = styled.input`
  background: #191320;
  color: white;
  border: none;
  border-bottom: 0.1rem solid #5b486a;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
