import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/all";
import { Container, Value, Input, Icon } from "./PriceConvertor.styles";

export const PriceConvertor = ({ currency, coinData }) => {
  const [currencyValue, setCurrencyValue] = useState("");
  const [cryptoValue, setCryptoValue] = useState("");

  const { marketData, symbol } = coinData;

  const handleCurrencyChange = (e) => {
    const amount = e.target.value < 0 ? 0 : e.target.value;
    const rate = marketData.currentPrice[currency];
    setCurrencyValue(amount);
    setCryptoValue((amount / rate).toFixed(2));
  };

  const handleCryptoChange = (e) => {
    const amount = e.target.value < 0 ? 0 : e.target.value;
    const rate = marketData.currentPrice[currency];
    setCryptoValue(amount);
    setCurrencyValue((rate * amount).toFixed(2));
  };

  return (
    <Container>
      <Input
        type="number"
        value={currencyValue}
        onChange={handleCurrencyChange}
      />
      <Value>{currency}</Value>
      <Icon>
        <FaExchangeAlt />
      </Icon>
      <Value>{symbol}</Value>
      <Input type="number" value={cryptoValue} onChange={handleCryptoChange} />
    </Container>
  );
};

export default PriceConvertor;
