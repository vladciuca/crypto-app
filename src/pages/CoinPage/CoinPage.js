import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { Row } from "antd";
import {
  CoinPageHeader,
  CoinPageChart,
  CoinPageChartOptions,
  CoinDescription,
  ErrorMessage,
} from "components";
import { utilityColors } from "../../theme";
import { SkeletonCoinPage } from "components/skeletons/SkeletonCoinPage";
import { SkeletonChart } from "components/skeletons/SkeletonChart";
import { Background, Container, ChartContainer } from "./CoinPage.styles";
import { getCoin } from "store/coin/coinActions";
import { getChartData, getChartDays } from "store/chart/chartActions";

function useLoadingBar(loadingBar, isLoading) {
  useEffect(() => {
    if (isLoading) {
      loadingBar.current.continuousStart();
    } else {
      loadingBar.current.complete();
    }
  }, [isLoading]);
}

const CoinPage = ({
  getCoin,
  coinData,
  isLoading,
  hasError,
  errorMessage,
  currency,
  getChartData,
  getChartDays,
  chartData,
  isChartLoading,
  hasChartError,
  chartErrorMessage,
  days,
}) => {
  const { id } = useParams();
  const loadingBar = React.createRef();

  const hasData = !isLoading && coinData;

  // useEffect(() => {
  //   if (isLoading) {
  //     loadingBar.current.continuousStart();
  //   } else {
  //     loadingBar.current.complete();
  //   }
  // }, [isLoading]);
  useLoadingBar(loadingBar, isLoading);

  useEffect(() => {
    getCoin(id);
    getChartData(id);
  }, [getCoin, id]);

  useEffect(() => {
    getChartData(id);
  }, [getChartData, currency, days]);

  return (
    <>
      <LoadingBar color={utilityColors.mktCap} ref={loadingBar} />
      {isLoading && <SkeletonCoinPage />}
      {hasError && (
        <Container>
          <ErrorMessage error={errorMessage} />
        </Container>
      )}
      {hasData && (
        <>
          <CoinPageHeader coinData={coinData} currency={currency} />
          <Row>
            {!isChartLoading && !hasChartError && (
              <CoinPageChart
                name={coinData.name}
                currency={currency}
                chartData={chartData}
              />
            )}
            {isChartLoading && <SkeletonChart />}
            {hasChartError && (
              <ChartContainer>
                <ErrorMessage error={chartErrorMessage} />
              </ChartContainer>
            )}
          </Row>
          <Background justify="end">
            <CoinPageChartOptions getChartDays={getChartDays} days={days} />
            <CoinDescription
              description={coinData.description}
              categories={coinData.categories}
              links={coinData.links}
            />
          </Background>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  coinData: state.coin.coinData,
  isLoading: state.coin.isLoading,
  hasError: state.coin.hasError,
  errorMessage: state.coin.errorMessage,
  currency: state.settings.currency,
  chartData: state.chart.chartData,
  isChartLoading: state.chart.isLoading,
  hasChartError: state.chart.hasError,
  chartErrorMessage: state.chart.errorMessage,
  days: state.chart.days,
});

const mapDispatchToProps = { getCoin, getChartData, getChartDays };

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
