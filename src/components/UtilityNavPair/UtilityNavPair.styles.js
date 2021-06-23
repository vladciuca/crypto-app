import styled, { css } from "styled-components";
import { Tooltip } from "antd";

export const TooltipContent = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  .ant-tooltip-inner {
    width: 145%;
  }
`;

export const Key = styled.span`
  font-weight: normal;
  font-size: 0.8rem;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  font-weight: bold;
`;

export const StyledTooltip = styled(Tooltip)`
  display: flex;
  align-items: center;
  span {
    padding-left: 0.2rem;
  }
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

export const MarketCapChange = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.marketcapchange < 0
      ? css`
          color: ${(props) => props.theme.danger};
        `
      : css`
          color: ${(props) => props.theme.success};
        `}
`;
