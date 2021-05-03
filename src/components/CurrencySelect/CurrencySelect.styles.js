import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  background: ${(props) => props.theme.cardSecondary};
  color: ${(props) => props.theme.info};
  border: none;
  font-size: 0.9rem;
  font-weight: bold;
  :focus {
    outline: none;
  }
  option {
    color: ${(props) => props.theme.primary};
  }
`;
