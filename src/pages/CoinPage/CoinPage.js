import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { Row, Col } from "antd";
import { CoinPageHeader, CoinPageChart } from "components";
import { Background, Card } from "./CoinPage.styles";
import { getCoin } from "store/coin/coinActions";

const CoinPage = (props) => {
  const { getCoin, coinData, isLoading, hasError, currency } = props;
  const id = props.match.params.id;
  const loadingBar = React.createRef();

  const hasData = !isLoading && coinData;

  useEffect(() => {
    if (isLoading) {
      loadingBar.current.continuousStart();
    } else {
      loadingBar.current.complete();
    }
  }, [isLoading]);

  useEffect(() => {
    getCoin(id);
  }, [getCoin]);

  return (
    <>
      <LoadingBar color={"red"} ref={loadingBar} />
      {isLoading && <div>Loading...</div>}
      {hasError && <div>There was a problem fetching your data..</div>}
      {hasData && (
        <>
          <CoinPageHeader coinData={coinData} currency={currency} />
          <Row>
            <CoinPageChart
              name={coinData.name}
              priceData={coinData.marketData.sparkline7d.price}
            />
          </Row>
          <Background>
            <Col span={1}></Col>
            <Col span={12}>
              <Card>
                <div>Description:</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: coinData.description.en || "",
                  }}
                ></div>
              </Card>
            </Col>
            <Col span={1}></Col>
            <Col span={9}>
              <Card>
                <div>Platforms</div>
                {Object.entries(coinData.platforms).map((entry) => {
                  const [key, value] = entry;
                  if (key === "" || value === "") {
                    return null;
                  } else {
                    return (
                      <div key={value}>
                        {key}: {value}
                      </div>
                    );
                  }
                })}
                <div>Explorers</div>
                {Object.values(coinData.links.blockchainSite).map((value) => {
                  return (
                    <div key={value}>
                      <a href={value}>{value}</a>
                    </div>
                  );
                })}
              </Card>
            </Col>
            <Col span={1}></Col>
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
  currency: state.settings.currency,
});

const mapDispatchToProps = { getCoin };

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
