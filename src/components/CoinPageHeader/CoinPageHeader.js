import { CoinInfo, CoinPriceData, CoinMarketData } from "components";
import { CoinPageHeaderRow, StyledCol } from "./CoinPageHeader.styles";

const CoinPageHeader = ({ coinData, currency }) => {
  const {
    id,
    image,
    marketCapRank,
    name,
    symbol,
    links,
    contractAddress,
    categories,
    marketData,
  } = coinData;

  return (
    <CoinPageHeaderRow>
      <StyledCol span={6}>
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
      </StyledCol>
      <StyledCol offset={1} span={6}>
        <CoinPriceData marketData={marketData} currency={currency} />
      </StyledCol>
      <StyledCol offset={1} span={10}>
        <CoinMarketData
          symbol={symbol}
          marketData={marketData}
          currency={currency}
        />
      </StyledCol>
    </CoinPageHeaderRow>
  );
};

export default CoinPageHeader;
