import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  SearchForm,
  SearchInput,
  SearchBtn,
  StyledSelect,
} from "./Search.styles";
import { RiSearch2Line } from "react-icons/all";
import { getAllCoins } from "store/search/searchActions";
import { getCoin } from "store/coin/coinActions";

const Search = ({ getCoin, allCoins, getAllCoins, history }) => {
  const [value, setValue] = useState("");
  const input = React.createRef();
  const handleClick = () => {
    input.current.focus();
  };
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    history.push(`/search/${searchTerm}`);
    setValue(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  useEffect(() => {
    getAllCoins();
  }, []);

  const searchList = allCoins.map((item) => {
    return { value: item.symbol, label: item.name, id: item.id };
  });

  const selectCoin = (coin) => {
    if (!coin) return;
    history.push(`/coins/${coin.id}`);
  };

  return (
    <>
      <StyledSelect
        isClearable={true}
        onChange={selectCoin}
        isSearchable={true}
        name="Coins"
        options={searchList}
        placeholder="Search..."
      />
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search"
          ref={input}
          value={value}
          onChange={handleChange}
          onBlur={handleSubmit}
        />
        <SearchBtn onClick={handleClick}>
          <RiSearch2Line size="1.4rem" />
        </SearchBtn>
      </SearchForm>
    </>
  );
};

const mapStateToProps = (state) => ({
  allCoins: state.search.allCoins,
});

const mapDispatchToProps = { getCoin, getAllCoins };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
