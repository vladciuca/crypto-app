import styled from "styled-components";

export const TooltipContent = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  .ant-tooltip-inner {
    width: 150%;
  }
`;

export const BarContainer = styled.div`
  cursor: pointer;
`;

export const TooltipBar = styled.div`
  margin-bottom: 1rem;
`;

export const TooltipRow = styled.div`
  display: flex;
  align-items: center;
`;

export const TooltipSpacer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.2rem;
`;

export const TooltipValue = styled.div`
  font-weight: bold;
  padding: 0 0.2rem;
`;

export const Ticker = styled.span`
  color: lightgray;
  font-weight: bold;
  margin-left: 0.1rem;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
`;
