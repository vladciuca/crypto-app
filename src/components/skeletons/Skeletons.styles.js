import styled, { keyframes } from "styled-components";
import { Row, Col } from "antd";

const loading = keyframes`
  from {
    left: -50%;
  }
  to {
    left: 100%;
  }
`;

export const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.cardPrimary};
  border-radius: 0.25rem;
  width: 100%;
  height: 4.25rem;
  margin: 0.2rem 0;
  transition: 1s ease-in-out;
`;

export const SkeletonText = styled.div`
  background: ${(props) => props.theme.bgPrimary};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0 5%;
  padding: 0 0.5rem;
  position: relative;
  overflow: hidden;
  ::before{
    content "";
    display: block;
    position: absolute;
    left: -50%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent 0%, ${(props) =>
      props.theme.bgSecondary} 50%, transparent 100%);
    animation: ${loading} 1.5s ease-in-out infinite;
  }
`;

export const SkeletonAvatar = styled.div`
  background: ${(props) => props.theme.bgPrimary};
  border-radius: 25rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: 0.2rem;
  margin-left: 5%;
  position: relative;
  overflow: hidden;
  ::before{
    content "";
    display: block;
    position: absolute;
    left: -50%;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent 0%, ${(props) =>
      props.theme.bgSecondary} 50%, transparent 100%);
    animation: ${loading} 1.5s ease-in-out infinite;
  }
`;

export const CoinPageRow = styled(Row)`
  margin: 2rem 5%;
`;

export const Spacer = styled.div`
  margin-top: 1rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CoinPageCol = styled(Col)`
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.75rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartBox = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
`;
