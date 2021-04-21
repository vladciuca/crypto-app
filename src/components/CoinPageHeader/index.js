import { Col } from "antd";
import { CoinInfo } from "../CoinInfo";
import { CoinMarketData } from "../CoinMarketData";
import { CoinPageHeaderRow } from "./CoinPageHeader.styles";

export const CoinPageHeader = ({ coinData }) => {
  const {
    id,
    image,
    marketCapRank,
    name,
    symbol,
    links,
    contractAddress,
    categories,
  } = coinData;
  return (
    <CoinPageHeaderRow>
      <Col span={11}>
        <CoinInfo
          id={id}
          image={image.large}
          marketCapRank={marketCapRank}
          name={name}
          symbol={symbol}
          website={links.homepage[0]}
          contractAddress={contractAddress}
          categories={categories}
        />
      </Col>
      <Col offset={1} span={12}>
        <CoinMarketData symbol={symbol} marketData={coinData.marketData} />
      </Col>
    </CoinPageHeaderRow>
  );
};
