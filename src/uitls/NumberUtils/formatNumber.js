const formatNumber = (number) => {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

export default formatNumber;
