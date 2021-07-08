import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  padding-bottom: 110px;
  overflow-x: hidden;
`;

export const FooterContainer = styled.div`
  position: relative;
  height: 110px;
  margin-top: -110px;
  clear: both;
  padding: 1rem 0;
`;

export const ResponsiveContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 576px) {
    margin: 0 10px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1160px) {
    margin: 0 20px;
  }
`;
