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
        return <AiFillEuroCircle size="1.6rem" />;
      case "gbp":
        return <AiFillPoundCircle size="1.6rem" />;
      case "btc":
        return <FaBitcoin size="1.45rem" />;
      case "eth":
        return <FaEthereum size="1.2rem" />;
      default:
        return <AiFillDollarCircle size="1.6rem" />;
    }
  };
  const menu = (
    <StyledMenu onClick={handleCurrency}>
      <StyledMenuItem key="usd">
        <div>
          <AiFillDollarCircle size="1.4rem" />
        </div>
        <span>USD (United States Dollar)</span>
      </StyledMenuItem>
      <StyledMenuItem key="gbp">
        <div>
          <AiFillPoundCircle size="1.4rem" />
        </div>
        <span>GBP (British Pound Sterling)</span>
      </StyledMenuItem>
      <StyledMenuItem key="eur">
        <div>
          <AiFillEuroCircle size="1.4rem" />
        </div>
        <span>EUR (Euro)</span>
      </StyledMenuItem>
      <StyledMenuItem key="btc">
        <div>
          <FaBitcoin size="1.25rem" />
        </div>
        <span>BTC (Bitcoin)</span>
      </StyledMenuItem>
      <StyledMenuItem key="eth">
        <div>
          <FaEthereum size="1.1rem" />
        </div>
        <span>ETH (Ethereum)</span>
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
