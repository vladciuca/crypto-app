import { FavoriteCoins } from "components";
import {
  StyledRow,
  Img,
  Rank,
  Name,
  Ticker,
  Favorite,
  LinkRow,
  Center,
} from "./CoinInfo.styles";

const CoinInfo = ({ id, image, marketCapRank, name, symbol, website }) => {
  return (
    <>
      <StyledRow>
        <div>
          <Center>
            <Img src={image} />
          </Center>
          <Center>
            <Name>{name}</Name>
          </Center>
          <Center>
            <Rank>#{marketCapRank}</Rank>
            <Ticker>{symbol}</Ticker>
            <Favorite>
              <FavoriteCoins id={id} />
            </Favorite>
          </Center>
        </div>
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
