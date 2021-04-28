import styled, { keyframes } from "styled-components";

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
  background: #241b2f;
  border-radius: 0.25rem;
  width: 100%;
  height: 4.25rem;
  margin: 0.2rem 0;
  transition: 1s ease-in-out;
`;

export const SkeletonText = styled.div`
  background: #262335;
  border-radius: 0.25rem;
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
    background: linear-gradient(to right, transparent 0%, #453d4f 50%, transparent 100%);
    animation: ${loading} 1s ease-in-out infinite;
  }
`;

export const SkeletonAvatar = styled.div`
  background: #262335;
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
    background: linear-gradient(to right, transparent 0%, #453d4f 50%, transparent 100%);
    animation: ${loading} 1s ease-in-out infinite;
  }
`;
