import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import { FaGasPump } from "react-icons/fa";
import { ETHGasPriceTooltip, ErrorTooltipMessage } from "components";
import { getEthGasData } from "store/utility/utilityActions";
import { utilityColors } from "../../theme";
import { Container, Value, Ticker } from "./ETHGasPrice.styles";
import { SkeletonText } from "../skeletons/Skeletons.styles";

const ETHGasPrice = ({
  ethGasData,
  getEthGasData,
  isLoading,
  hasError,
  errorMessage,
}) => {
  useEffect(() => {
    getEthGasData();
  }, [getEthGasData]);

  const hasData = !isLoading && ethGasData;

  return (
    <>
      <Container>
        <FaGasPump size="0.7rem" color={utilityColors.eth} />

        {hasError && <ErrorTooltipMessage error={errorMessage} />}
        {hasData && (
          <Tooltip
            placement="bottomRight"
            title={() => <ETHGasPriceTooltip ethGasData={ethGasData} />}
          >
            <Container>
              {/* <FaGasPump size="0.7rem" color={utilityColors.eth} /> */}
              <Value>{ethGasData.fast / 10}</Value>
              <Ticker>Gwei</Ticker>
            </Container>
          </Tooltip>
        )}
      </Container>
      {isLoading && <SkeletonText width="100%" height="0.5rem" />}
    </>
  );
};

const mapStateToProps = (state) => ({
  ethGasData: state.utility.ethGasData,
  isLoading: state.utility.isLoadingEthGas,
  hasError: state.utility.hasErrorEthGas,
  errorMessage: state.utility.ethGasErrorMessage,
});

const mapDispatchToProps = {
  getEthGasData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ETHGasPrice);
