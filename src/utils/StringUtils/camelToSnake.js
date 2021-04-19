const camelToSnake = (s) => {
  let result = s.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("_").toLowerCase();
};

export default camelToSnake;
