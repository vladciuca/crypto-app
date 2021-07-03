import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyledAsyncSelect } from "./Search.styles";
// import { RiSearch2Line } from "react-icons/all";
import { getAllCoins } from "store/search/searchActions";

const Search = ({ allCoins, getAllCoins, history, isLoading }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getAllCoins(value);
  }, [getAllCoins, value]);

  const searchList =
    allCoins &&
    allCoins.map((item) => {
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
        placeholder="Search..."
        isLoading={isLoading}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allCoins: state.search.allCoins,
  isLoading: state.search.isLoading,
});

const mapDispatchToProps = { getAllCoins };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
