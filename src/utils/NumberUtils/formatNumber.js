const formatNumber = (number) => {
  if (number === null) return;
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

export default formatNumber;
