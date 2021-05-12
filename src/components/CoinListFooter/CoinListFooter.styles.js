import styled from "styled-components";

export const Footer = styled.div`
  color: ${(props) => props.theme.info};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 2.4rem;
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.info};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;
