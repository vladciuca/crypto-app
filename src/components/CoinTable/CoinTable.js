
import { utilityColors } from "theme";
import { ResponsiveContainer } from "components/UI/UI.styles";

import {
  CoinListTitle,
  CoinListHeader,

  CoinListItem,
} from "components";

export const CoinTable = (props) => (
  <ResponsiveContainer>
      <CoinListTitle
        showFavorites={props.showFavorites}
        favoriteCoinsLength={props.list.length}
        coinsPerPage={props.coinsPerPage}
        handleCoinsPerPage={props.handleCoinsPerPage}
        page={props.page}
        listOrder={props.listOrder}
        listBy={props.listBy}
        handleListBy={props.handleListBy}
        handleListOrder={props.handleListOrder}
        category={props.category}
        handleCategory={props.handleCategory}
        handleNextPage={props.handleNextPage}
        handlePrevPage={props.handlePrevPage}
      />
      <CoinListHeader
        showFavorites={props.showFavorites}
        toggleFavoriteList={props.toggleFavoriteList}
        sortOrder={props.sortOrder}
        sortBy={props.sortBy}
        handleSort={props.handleSort}
        page={props.page}
        coinsPerPage={props.coinsPerPage}
      />
      {props.hasData && (
        <>
          {props.sortedList.map((coin) => {
            return (
              <CoinListItem
                key={coin.id}
                coin={coin}
                currency={props.settings.currency}
                theme={props.settings.theme}
                utilityColors={utilityColors}
              />
            );
          })}
        </>
      )}
    </ResponsiveContainer>
);

export default CoinTable