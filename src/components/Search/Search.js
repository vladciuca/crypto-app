import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyledAsyncSelect } from "./Search.styles";
import { hideFavoriteList } from "store/favorites/favoritesActions";
import { getAllCoins } from "store/search/searchActions";

const Search = ({
  allCoins,
  getAllCoins,
  history,
  isLoading,
  hideFavoriteList,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getAllCoins(value);
  }, [getAllCoins, value]);

  const searchList = allCoins.map((item) => {
    return { value: item.symbol, label: item.name, id: item.id };
  });

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setValue(inputValue);
    return inputValue;
  };

  const handleChange = (item) => {
    const coinId = item.id;
    history.push(`/coins/${coinId}`);
    hideFavoriteList();
  };

  return (
    <>
      <StyledAsyncSelect
        className="react-select-container"
        classNamePrefix="react-select"
        cacheOptions
        options={searchList}
        defaultOptions
        onInputChange={handleInputChange}
        onChange={handleChange}
        placeholder="Search"
        isLoading={isLoading}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allCoins: state.search.allCoins,
  isLoading: state.search.isLoading,
});

const mapDispatchToProps = { getAllCoins, hideFavoriteList };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
