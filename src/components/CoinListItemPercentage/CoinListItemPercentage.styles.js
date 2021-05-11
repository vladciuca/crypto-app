import styled from "styled-components";

export const ValueSlot = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  font-size: 0.8rem;
  .ant-tooltip-inner {
    width: 130%;
  }
`;

export const Bar = styled.div`
  padding: 0.5rem 0;
`;

export const Spacer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.4rem;
`;

export const Ticker = styled.span`
  color: ${(props) => props.theme.info};
  font-weight: bold;
  margin-left: 0.1rem;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
`;
