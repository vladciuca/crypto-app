import { FavoriteCoins } from "components";
import {
  StyledRow,
  Img,
  Rank,
  Name,
  Ticker,
  LinkRow,
  Center,
} from "./CoinInfo.styles";

const CoinInfo = ({ id, image, marketCapRank, name, symbol, website }) => {
  return (
    <>
      <StyledRow>
        <Center
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <Img src={image} />
        </Center>
        <Center
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <Name>{name}</Name>
        </Center>
        <Center
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <Rank>#{marketCapRank}</Rank>
          <Ticker>{symbol}</Ticker>
          <FavoriteCoins id={id} />
        </Center>
      </StyledRow>

      <LinkRow>
        {website && (
          <>
            <a target="_blank" rel="noreferrer" href={website}>
              {website}
            </a>
          </>
        )}
      </LinkRow>
    </>
  );
};

export default CoinInfo;
