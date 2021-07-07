const formatNumber = (number) => {
  if (number === null || number === undefined) return;
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

export default formatNumber;
