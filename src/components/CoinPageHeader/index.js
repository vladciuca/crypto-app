import { CoinInfo } from "../CoinInfo";
import { CoinMarketData } from "../CoinMarketData";
import { Col } from "antd";
import { CoinPageHeaderRow } from "./CoinPageHeader.styles";

export const CoinPageHeader = (
  {
    img,
    rank,
    name,
    ticker,
    website,
    contractAddress,
    categories,
    currentPrice,
    priceChange24h,
    priceChangePercentage24h,
    marketCap,
    marketCapChangePercentage24h,
    fullyDilutedValuation,
    totalVolume,
    circulatingSupply,
    totalSupply,
  },
  ...rest
) => {
  return (
    <CoinPageHeaderRow>
      <Col span={11}>
        <CoinInfo
          img={img}
          rank={rank}
          name={name}
          ticker={ticker}
          website={website}
          contractAddress={contractAddress}
          categories={categories}
        />
      </Col>
      <Col offset={1} span={12}>
        <CoinMarketData
          currentPrice={currentPrice}
          priceChange24h={priceChange24h}
          priceChangePercentage24h={priceChangePercentage24h}
          marketCap={marketCap}
          marketCapChangePercentage24h={marketCapChangePercentage24h}
          fullyDilutedValuation={fullyDilutedValuation}
          totalVolume={totalVolume}
          circulatingSupply={circulatingSupply}
          totalSupply={totalSupply}
        />
      </Col>
    </CoinPageHeaderRow>
  );
};
