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
    <>
      <CoinPageHeaderRow>
        <StyledCol
          xs={{ span: 24, order: 1 }}
          sm={{ span: 12, order: 1 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 6, order: 1 }}
          xl={{ span: 6, order: 1 }}
        >
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
        <StyledCol
          xs={{ span: 24, offset: 0, order: 2 }}
          sm={{ span: 11, offset: 1, order: 2 }}
          md={{ span: 12, offset: 1, order: 2 }}
          lg={{ span: 6, offset: 1, order: 2 }}
          xl={{ span: 6, offset: 1, order: 2 }}
        >
          <CoinPriceData marketData={marketData} currency={currency} />
        </StyledCol>
        <StyledCol
          xs={{ span: 24, offset: 0, order: 3 }}
          sm={{ span: 24, offset: 0, order: 3 }}
          md={{ span: 24, offset: 0, order: 3 }}
          lg={{ span: 10, offset: 1, order: 3 }}
          xl={{ span: 10, offset: 1, order: 3 }}
        >
          <CoinMarketData
            symbol={symbol}
            marketData={marketData}
            currency={currency}
          />
        </StyledCol>
      </CoinPageHeaderRow>
    </>
  );
};

export default CoinPageHeader;
