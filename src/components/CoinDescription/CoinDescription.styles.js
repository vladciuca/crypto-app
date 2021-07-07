import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
  background: ${(props) => props.theme.cardPrimary};
  border-radius: 0.5rem;
  padding: 1.5rem;
  a {
    color: ${(props) => props.theme.primary};
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

export const Tab = styled.span`
  width: 10%;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  border-radius: 0.99rem;
  padding: 0.35rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.span`
  background: ${(props) => props.theme.cardSecondary};
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.99rem;
  display: flex;
  align-item: center;
`;
