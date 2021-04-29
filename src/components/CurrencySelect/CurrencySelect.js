import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillPoundCircle,
} from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { Label, Select } from "./CurrencySelect.styles";

const CurrencySelect = ({ currency, handleCurrencyChange }) => {
  const currencyIcon = () => {
    switch (currency) {
      case "eur":
        return <AiFillEuroCircle size="1.4rem" color="#a487c3" />;
      case "gbp":
        return <AiFillPoundCircle size="1.4rem" color="#a487c3" />;
      case "btc":
        return <FaBitcoin size="1.3rem" color="#a487c3" />;
      case "eth":
        return <FaEthereum size="1rem" color="#a487c3" />;
      default:
        return <AiFillDollarCircle size="1.4rem" color="#a487c3" />;
    }
  };
  return (
    <Label>
      {currencyIcon()}
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
