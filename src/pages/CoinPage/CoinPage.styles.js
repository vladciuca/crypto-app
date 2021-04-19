import { Row } from "antd";
import styled from "styled-components";

export const Background = styled(Row)`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  padding-bottom: 10%;
  background: linear-gradient(
    to top,
    transparent 50%,
    rgb(164, 135, 195, 0.5) 90%
  );
  div {
    display: block;
  }
`;

export const Card = styled.div`
  height: 20rem;
  background: #241b2f;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
`;
