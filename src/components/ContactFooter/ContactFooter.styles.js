import styled from "styled-components";
import { Row } from "antd";

export const Container = styled.div`
  border-radius: 0.75rem;
  background: ${(props) => props.theme.cardPrimary};
  padding: 0.5rem 0;
  margin: 0 30%;
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 0 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 15%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 0 20%;
  }
`;

export const SocialMediaRow = styled(Row)`
  justify-content: center;
  align-items: center;
  a {
    padding-top: 0.2rem;
    margin: 0.2rem 1rem;
    color: ${(props) => props.theme.text};
  }
`;

export const InfoRow = styled(Row)`
  justify-content: center;
  align-items: center;
  strong {
    padding: 0.2rem;
  }
`;

export const Img = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  margin-left: 0.2rem;
`;
