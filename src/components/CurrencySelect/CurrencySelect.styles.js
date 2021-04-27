import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  margin-left: 0.2rem;
  background: #191320;
  color: #5b486a;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  :focus {
    outline: none;
  }
  option {
    color: #a487c3;
  }
`;
