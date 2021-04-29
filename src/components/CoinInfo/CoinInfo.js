// import FavoriteCoins from "../FavoriteCoins/FavoriteCoins";
import { Row, Col } from "antd";
import { FavoriteCoins } from "components";
import { FaEthereum } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
import {
  Img,
  Rank,
  Name,
  Ticker,
  Favorite,
  Category,
  CategoryRow,
  LinkRow,
  Icon,
  CopyText,
} from "./CoinInfo.styles";

const CoinInfo = ({
  id,
  image,
  marketCapRank,
  name,
  symbol,
  website,
  contractAddress,
  categories,
}) => {
  return (
    <>
      <Row align="middle">
        <Col span={3}>
          <Img src={image} />
        </Col>
        <Col offset={1} span={20}>
          <Name>
            {name}
            <Favorite>
              <FavoriteCoins id={id} />
            </Favorite>
          </Name>
          <div>
            <Rank>#{marketCapRank}</Rank>
            <Ticker>{symbol}</Ticker>
          </div>
        </Col>
      </Row>
      <CategoryRow>
        <Col span={24}>
          {categories &&
            Object.values(categories).map((value) => {
              return <Category key={value}>{value}</Category>;
            })}
        </Col>
      </CategoryRow>
      <LinkRow>
        <Col>
          {website && (
            <div>
              <Icon>
                <BiLinkAlt />
              </Icon>
              <a target="_blank" rel="noreferrer" href={website}>
                {website}
              </a>
            </div>
          )}
        </Col>
      </LinkRow>
      <LinkRow>
        <Col>
          {contractAddress && (
            <div>
              <Icon>
                <FaEthereum />
              </Icon>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://etherscan.io/token/${contractAddress}`}
                >
                  {contractAddress}
                </a>
                <CopyText
                  onClick={() => {
                    navigator.clipboard.writeText(contractAddress);
                  }}
                >
                  <MdContentCopy />
                </CopyText>
              </span>
            </div>
          )}
        </Col>
      </LinkRow>
    </>
  );
};

export default CoinInfo;
