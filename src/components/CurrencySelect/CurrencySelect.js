import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
} from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { Icon, Label, Select } from "./CurrencySelect.styles";

const CurrencySelect = ({ currency, handleCurrencyChange }) => {
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
  return (
    <Label>
      <Icon>{currencyIcon()}</Icon>
      <Select value={currency} onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </Select>
    </Label>
  );
};

export default CurrencySelect;
