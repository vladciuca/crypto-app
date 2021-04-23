const getCurrencySymbol = (currency) => {
  switch (currency) {
    default:
      return "$";
    case "eur":
      return "€";
    case "gbp":
      return "£";
    case "btc":
      return "₿";
    case "eth":
      return "Ξ";
  }
};

export default getCurrencySymbol;
