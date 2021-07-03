import React from "react";
import { Tooltip } from "antd";
import { BiMessageError } from "react-icons/all";
import { Icon } from "./ErrorTooltipMessage.styles";

const ErrorTooltipMessage = ({ error }) => {
  return (
    <Tooltip
      placement="bottomRight"
      title={`There was an error fetching data... ${error}`}
    >
      <Icon>
        <BiMessageError />
      </Icon>
    </Tooltip>
  );
};

export default ErrorTooltipMessage;
