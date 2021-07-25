import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { Row, Col } from "antd";
import {
  CoinPageHeader,
  CoinPageChart,
  CoinPageChartOptions,
  ErrorMessage,
  PriceConvertor,
} from "components";

import { getScreenWidth } from "utils";
import { utilityColors } from "../../theme";
import { ResponsiveContainer } from "components/UI/UI.styles";
import { SkeletonCoinPage } from "components/skeletons/SkeletonCoinPage";
import { SkeletonChart } from "components/skeletons/SkeletonChart";
import {
  Background,
  ChartContainer,
  ChartOptions,
  ChartOptionCol,
} from "./CoinPage.styles";
import { getCoin } from "store/coin/coinActions";
import { getChartData, getChartDays } from "store/chart/chartActions";
import withFavorites from "HOC/withFavorites";

function useLoadingBar(loadingBar, isLoading) {
  useEffect(() => {
    if (isLoading) {
      loadingBar.current.continuousStart();
    } else {
      loadingBar.current.complete();
    }
    // eslint-disable-next-line
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
  const hasData = !isLoading && coinData;
  const loadingBar = React.createRef();

  useLoadingBar(loadingBar, isLoading);

  useEffect(() => {
    getCoin(id);
    getChartData(id);
    // eslint-disable-next-line
  }, [getCoin, id]);

  useEffect(() => {
    getChartData(id);
    // eslint-disable-next-line
  }, [getChartData, currency, days]);

  return (
    <>
      <LoadingBar color={utilityColors.mktCap} ref={loadingBar} />
      {isLoading && (
        <ResponsiveContainer>
          <SkeletonCoinPage />
        </ResponsiveContainer>
      )}
      {hasError && (
        <ResponsiveContainer>
          <ErrorMessage error={errorMessage} />
        </ResponsiveContainer>
      )}
      {hasData && (
        <>
          <ResponsiveContainer>
            <CoinPageHeader coinData={coinData} currency={currency} />
          </ResponsiveContainer>

          <Row>
            {!isChartLoading && !hasChartError && (
              <CoinPageChart
                name={coinData.name}
                currency={currency}
                chartData={chartData}
              />
            )}
            {isChartLoading && (
              <ChartContainer>
                <SkeletonChart barPerChart={getScreenWidth()} />
              </ChartContainer>
            )}
            {hasChartError && (
              <ChartContainer>
                <ErrorMessage error={chartErrorMessage} />
              </ChartContainer>
            )}
          </Row>
          <Background>
            <ResponsiveContainer>
              <ChartOptions justify="center">
                <ChartOptionCol
                  xs={{ span: 24, order: 2 }}
                  sm={{ span: 24, order: 2 }}
                  md={{ span: 24, order: 2 }}
                  lg={{ span: 12, order: 1 }}
                  xl={{ span: 12, order: 1 }}
                >
                  <div>
                    <PriceConvertor
                      // symbol={symbol}
                      coinData={coinData}
                      currency={currency}
                    />
                  </div>
                </ChartOptionCol>

                <Col
                  xs={{ span: 24, order: 1 }}
                  sm={{ span: 24, order: 1 }}
                  md={{ span: 24, order: 1 }}
                  lg={{ span: 12, order: 2 }}
                  xl={{ span: 12, order: 2 }}
                >
                  <div>
                    <CoinPageChartOptions
                      getChartDays={getChartDays}
                      days={days}
                    />
                  </div>
                </Col>
              </ChartOptions>

              {/* <CoinDescription
                description={coinData.description}
                categories={coinData.categories}
                links={coinData.links}
              /> */}
            </ResponsiveContainer>
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
  // showFavorites: state.favorites.showFavorites,
});

const mapDispatchToProps = { getCoin, getChartData, getChartDays };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFavorites(CoinPage));
