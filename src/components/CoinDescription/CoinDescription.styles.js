import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  margin-top: 4rem;
  background: ${(props) => props.theme.cardPrimary};
  border-radius: 0.5rem;
  padding: 1.5rem;
  a {
    color: ${(props) => props.theme.primary};
  }
`;

export const ShowBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    display: flex;
    align-items: center;
    color: white;
    background: ${(props) => props.theme.primary};
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    padding: 0.1rem 0.5rem;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  margin-bottom: 0.5rem;
`;

export const Category = styled.span`
  display: inline-flex;
  font-size: 0.8rem;
  background: ${(props) => props.theme.secondary};
  color: white;
  border-radius: 0.25rem;
  padding: 0.2rem 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  a {
    color: white;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
`;

export const Spacer = styled.div`
  height: 3rem;
`;
