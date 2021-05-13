import styled from "styled-components";

export const Footer = styled.div`
  color: ${(props) => props.theme.info};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 2.45rem;
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
`;
