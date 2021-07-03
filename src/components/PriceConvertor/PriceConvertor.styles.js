import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 0 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 3%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 0 5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 0 6%;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    margin: 0 8%;
  }
`;

export const Value = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${(props) => props.theme.cardSecondary};
  padding: 0.5rem;
  margin: 0 0.2rem;
  border-radius: 0.25rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.cardPrimary};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

export const Icon = styled.span`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
