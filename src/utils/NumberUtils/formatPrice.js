const formatPrice = (number) => {
  if (number < 1) {
    return number.toLocaleString(undefined, {
      minimumSignificantDigits: 2,
      maximumSignificantDigits: 4,
    });
  } else {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }
};

export default formatPrice;
