const formatPrice = (number) => {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 4,
  });
};

export default formatPrice;
