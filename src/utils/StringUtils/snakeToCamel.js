const snakeToCamel = (s) => {
  return s.replace(/([_][a-z, 1-9])/gi, ($1) => {
    return $1.toUpperCase().replace("_", "");
  });
};

export default snakeToCamel;
