import { Col } from "antd";
import { CoinInfo } from "../CoinInfo";
import { CoinMarketData } from "../CoinMarketData";
import { CoinPageHeaderRow } from "./CoinPageHeader.styles";

export const CoinPageHeader = ({ coinData }) => {
  const {
    image,
    rank,
    name,
    ticker,
    links,
    contractAddress,
    categories,
  } = coinData;
  return (
    <CoinPageHeaderRow>
      <Col span={11}>
        <CoinInfo
          img={image.large}
          rank={rank}
          name={name}
          ticker={ticker}
          website={links.homepage[0]}
          contractAddress={contractAddress}
          categories={categories}
        />
      </Col>
      <Col offset={1} span={12}>
        <CoinMarketData marketData={coinData.marketData} />
      </Col>
    </CoinPageHeaderRow>
  );
};
