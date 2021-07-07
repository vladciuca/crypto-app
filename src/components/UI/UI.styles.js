import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  padding-bottom: 100px;
  overflow-x: hidden;
`;

export const FooterContainer = styled.div`
  position: relative;
  height: 100px;
  margin-top: -100px;
  clear: both;
  padding: 1rem 0;
`;

export const ResponsiveContainer = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 576px) {
    margin: 0 5px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 10px;
  }
  @media (min-width: 768px) and (max-width: 1060px) {
    margin: 0 20px;
  }
`;
