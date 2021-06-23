import { Dropdown } from "antd";
import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
  FaBitcoin,
  FaEthereum,
  FaCaretDown,
} from "react-icons/all";
import {
  Icon,
  Currency,
  DropdownContent,
  StyledMenuItem,
  StyledMenu,
} from "./CurrencySelect.styles";

const CurrencySelect = ({ currency, handleCurrency }) => {
  const currencyIcon = () => {
    switch (currency) {
      case "eur":
        return <AiFillEuroCircle size="1.4rem" />;
      case "gbp":
        return <AiFillPoundCircle size="1.4rem" />;
      case "btc":
        return <FaBitcoin size="1.3rem" />;
      case "eth":
        return <FaEthereum size="1rem" />;
      default:
        return <AiFillDollarCircle size="1.4rem" />;
    }
  };
  const menu = (
    <StyledMenu onClick={handleCurrency}>
      <StyledMenuItem key="usd">
        <div>
          <AiFillDollarCircle size="1.4rem" />
        </div>
        <span>USD</span>
      </StyledMenuItem>
      <StyledMenuItem key="gbp">
        <div>
          <AiFillPoundCircle size="1.4rem" />
        </div>
        <span>GBP</span>
      </StyledMenuItem>
      <StyledMenuItem key="eur">
        <div>
          <AiFillEuroCircle size="1.4rem" />
        </div>
        <span>EUR</span>
      </StyledMenuItem>
      <StyledMenuItem key="btc">
        <div>
          <FaBitcoin size="1.25rem" />
        </div>
        <span>BTC</span>
      </StyledMenuItem>
      <StyledMenuItem key="eth">
        <div>
          <FaEthereum size="1.1rem" />
        </div>
        <span>ETH</span>
      </StyledMenuItem>
    </StyledMenu>
  );
  return (
    <Dropdown overlay={menu}>
      <DropdownContent>
        <Icon>{currencyIcon()}</Icon>
        <Currency>{currency}</Currency>
        <FaCaretDown />
      </DropdownContent>
    </Dropdown>
  );
};

export default CurrencySelect;
