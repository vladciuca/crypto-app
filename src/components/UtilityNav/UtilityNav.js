import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  PercentageBarTooltip,
  UtilityNavPair,
  ETHGasPrice,
  ThemeSwitch,
  ErrorTooltipMessage,
} from "components";
import { getCurrencySymbol, convertLongNumber, formatNumber } from "utils";
import {
  getGlobalData,
  getBtcMarketCap,
  getEthMarketCap,
} from "store/utility/utilityActions";
import { utilityColors } from "../../theme";
import {
  Container,
  StyledRow,
  StyledCol,
  StyledSwitch,
} from "./UtilityNav.styles";
import { SkeletonText } from "../skeletons/Skeletons.styles";

const UtilityNav = ({
  currency,
  theme,
  handleTheme,
  globalData,
  getGlobalData,
  getBtcMarketCap,
  getEthMarketCap,
  btcMarketCap,
  ethMarketCap,
  isLoading,
  hasError,
  errorMessage,
}) => {
  const getCurrencyValue = (key) => {
    if (globalData === null) return;
    return globalData[key][currency];
  };

  const currencySymbol = getCurrencySymbol(currency);

  useEffect(() => {
    getGlobalData();
    getBtcMarketCap();
    getEthMarketCap();
  }, [getGlobalData, getBtcMarketCap, getEthMarketCap]);

  const hasData = !isLoading && globalData;

  return (
    <Container>
      {isLoading && <SkeletonText width="70%" height="0.5rem" />}
      {hasError && <ErrorTooltipMessage error={errorMessage} />}
      {hasData && (
        <StyledRow gutter={[8]}>
          <StyledCol className={"hide-sm"}>
            <UtilityNavPair
              symbol={""}
              colorKey={""}
              tooltipKey={"Active Cryptocurrencies"}
              tooltipValue={hasData && globalData.activeCryptocurrencies}
              pairValue={hasData && globalData.activeCryptocurrencies}
              wide={false}
            />
          </StyledCol>
          <StyledCol className={"hide-sm"}>
            <UtilityNavPair
              symbol={""}
              colorKey={""}
              tooltipKey={"Active Markets"}
              tooltipValue={hasData && globalData.markets}
              pairValue={hasData && globalData.markets}
              wide={false}
            />
          </StyledCol>
          <StyledCol>
            <UtilityNavPair
              symbol={currencySymbol}
              colorKey={utilityColors.mktCap}
              tooltipKey={"Total Market Cap"}
              tooltipValue={
                hasData && formatNumber(getCurrencyValue("totalMarketCap"))
              }
              pairValue={
                hasData && convertLongNumber(getCurrencyValue("totalMarketCap"))
              }
              marketCapChange={
                hasData && globalData.marketCapChangePercentage24hUsd
              }
              wide={true}
            />
          </StyledCol>
          <StyledCol>
            <UtilityNavPair
              symbol={currencySymbol}
              colorKey={utilityColors.volume}
              tooltipKey={"24h Total Volume"}
              tooltipValue={
                hasData && formatNumber(getCurrencyValue("totalVolume"))
              }
              pairValue={
                hasData && convertLongNumber(getCurrencyValue("totalVolume"))
              }
              wide={true}
            />
          </StyledCol>
          <StyledCol className={"hide-sm-md"}>
            <PercentageBarTooltip
              currencySymbol={currencySymbol}
              baseTitle={"Total Market Cap"}
              baseValue={hasData && getCurrencyValue("totalMarketCap")}
              baseColor={utilityColors.mktCap}
              fillTitle={"24h Volume"}
              fillValue={hasData && getCurrencyValue("totalVolume")}
              fillColor={utilityColors.volume}
              fillPercentage={""}
              wide={true}
              width={"2.5rem"}
              height={"0.4rem"}
            />
          </StyledCol>
          <StyledCol>
            <UtilityNavPair
              symbol={"%"}
              colorKey={utilityColors.btc}
              tooltipKey={"Bitcoin(BTC) Dominance"}
              tooltipValue={
                hasData && globalData.marketCapPercentage.btc.toFixed(2)
              }
              pairValue={
                hasData && formatNumber(globalData.marketCapPercentage.btc)
              }
              wide={false}
            />
          </StyledCol>
          <StyledCol className={"hide-sm-md"}>
            <PercentageBarTooltip
              currencySymbol={currencySymbol}
              baseTitle={"Total Market Cap"}
              baseValue={hasData && getCurrencyValue("totalMarketCap")}
              baseColor={utilityColors.mktCap}
              fillTitle={"BTC Market Cap"}
              fillValue={btcMarketCap ? btcMarketCap[currency] : "N/A"}
              fillColor={utilityColors.btc}
              fillPercentage={
                hasData && globalData.marketCapPercentage.btc.toFixed(2)
              }
              wide={true}
              width={"2.5rem"}
              height={"0.4rem"}
            />
          </StyledCol>
          <StyledCol>
            <UtilityNavPair
              symbol={"%"}
              colorKey={utilityColors.eth}
              tooltipKey={"Ethereum(ETH) Dominance"}
              tooltipValue={
                hasData &&
                hasData &&
                globalData.marketCapPercentage.eth.toFixed(2)
              }
              pairValue={
                hasData && formatNumber(globalData.marketCapPercentage.eth)
              }
              wide={true}
            />
          </StyledCol>
          <StyledCol className={"hide-sm-md"}>
            <PercentageBarTooltip
              currencySymbol={currencySymbol}
              baseTitle={"Total Market Cap"}
              baseValue={hasData && getCurrencyValue("totalMarketCap")}
              baseColor={utilityColors.mktCap}
              fillTitle={"ETH Market Cap"}
              fillValue={ethMarketCap ? ethMarketCap[currency] : "N/A"}
              fillColor={utilityColors.eth}
              fillPercentage={
                hasData && globalData.marketCapPercentage.eth.toFixed(2)
              }
              wide={true}
              width={"2.5rem"}
              height={"0.4rem"}
            />
          </StyledCol>
          <StyledCol>
            <ETHGasPrice />
          </StyledCol>
        </StyledRow>
      )}
      <StyledRow>
        <StyledCol>
          <ThemeSwitch theme={theme} />
          <StyledSwitch size="small" onClick={handleTheme} />
        </StyledCol>
      </StyledRow>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  globalData: state.utility.globalData,
  btcMarketCap: state.utility.btcMarketCap,
  ethMarketCap: state.utility.ethMarketCap,
  isLoading: state.utility.isLoadingGlobalData,
  hasError: state.utility.hasErrorGlobalData,
  errorMessage: state.utility.globalDataErrorMessage,
});

const mapDispatchToProps = {
  getGlobalData,
  getBtcMarketCap,
  getEthMarketCap,
};

export default connect(mapStateToProps, mapDispatchToProps)(UtilityNav);
