import { Row } from "antd";
import { ColumnHeader } from "./CoinHeader.styles";

export const CoinListHeader = (props) => {
  return (
    <Row>
      <ColumnHeader span={1}>
        <div>Fav</div>
      </ColumnHeader>
      <ColumnHeader span={1}>
        <div>Rank</div>
      </ColumnHeader>

      <ColumnHeader span={5}>
        <div>Name</div>
      </ColumnHeader>
      <ColumnHeader span={2}>
        <div>Price</div>
      </ColumnHeader>
      <ColumnHeader span={2}>
        <div>24h %</div>
      </ColumnHeader>
    </Row>
  );
};
