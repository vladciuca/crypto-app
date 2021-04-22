import { Select } from "./CurrencySelect.styles";

export const CurrencySelect = ({ currency, handleCurrencyChange }) => {
  return (
    <Select value={currency} onChange={handleCurrencyChange}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="btc">BTC</option>
      <option value="eth">ETH</option>
    </Select>
  );
};
