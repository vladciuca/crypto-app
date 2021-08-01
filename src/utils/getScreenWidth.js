const getScreenWidth = () => {
  const width = window.innerWidth;
  if (width < 646) return 4;
  if (width < 992 && width > 576) return 8;
  return 12;
};

export default getScreenWidth;
