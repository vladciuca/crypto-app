import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 5%;
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 1rem 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 1rem 3%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 1rem 5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 1rem 6%;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    margin: 1rem 8%;
  }
`;
