import { Select } from "./CurrencySelect.styles";

export const CurrencySelect = (props) => {
  return (
    <Select value={props.currency} onChange={props.handleCurrencyChange}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
    </Select>
  );
};
