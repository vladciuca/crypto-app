const getCurrencySymbol = (currency) => {
  switch (currency) {
    default:
      return "$";

    case "eur":
      return "€";

    case "gbp":
      return "£";
  }
};

export default getCurrencySymbol;
