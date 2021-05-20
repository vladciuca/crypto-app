import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PercentageBarTooltip,
  UtilityNavPair,
  ETHGasPrice,
  CurrencySelect,
  ThemeSwitch,
} from "components";
import {
  getCurrencySymbol,
  keysToCamel,
  convertLongNumber,
  formatNumber,
} from "utils";
import { utilityColors } from "../../theme";
import { Container, StyledRow, StyledCol } from "./UtilityNav.styles";
import { SkeletonText } from "../skeletons/Skeletons.styles";

const UtilityNav = ({ currency, handleCurrency, theme, handleTheme }) => {
  const [globalData, setGlobalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getGlobalData = async () => {
    try {
      setError(false);
      setLoading(true);
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(`${base}/global`);
      setLoading(false);
      setGlobalData(keysToCamel(data.data));
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const getCurrencyValue = (key) => {
    return globalData[key][currency];
  };

  const currencySymbol = getCurrencySymbol(currency);

  useEffect(() => {
    getGlobalData();
  }, []);

  const hasData = !loading && globalData;

  return (
    <Container>
      {loading && <SkeletonText width="70%" height="0.5rem" />}
      {error && "has ERROR"}
      {hasData && (
        <StyledRow gutter={[8]}>
          <StyledCol>
            <UtilityNavPair
              symbol={""}
              colorKey={""}
              tooltipKey={"Active Cryptocurrencies"}
              tooltipValue={hasData && globalData.activeCryptocurrencies}
              pairValue={hasData && globalData.activeCryptocurrencies}
              wide={false}
            />
          </StyledCol>
          <StyledCol>
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
          <StyledCol>
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
          <StyledCol>
            <PercentageBarTooltip
              currencySymbol={currencySymbol}
              baseTitle={"Total Market Cap"}
              baseValue={hasData && getCurrencyValue("totalMarketCap")}
              baseColor={utilityColors.mktCap}
              fillTitle={"BTC Market Cap"}
              fillValue={"placeholder"}
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
          <StyledCol>
            <PercentageBarTooltip
              currencySymbol={currencySymbol}
              baseTitle={"Total Market Cap"}
              baseValue={hasData && getCurrencyValue("totalMarketCap")}
              baseColor={utilityColors.mktCap}
              fillTitle={"ETH Market Cap"}
              fillValue={"placeholder"}
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
      <StyledRow gutter={[8]}>
        <StyledCol>
          <CurrencySelect currency={currency} handleCurrency={handleCurrency} />
        </StyledCol>
        <StyledCol>
          <ThemeSwitch theme={theme} handleTheme={handleTheme} />
        </StyledCol>
      </StyledRow>
    </Container>
  );
};

export default UtilityNav;
