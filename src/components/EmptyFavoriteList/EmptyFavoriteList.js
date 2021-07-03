import React from "react";
import { RiHeartLine } from "react-icons/ri";
import { Container, Center, List } from "./EmptyFavoriteList.styles";

const EmptyFavoriteList = () => {
  return (
    <Container>
      <Center>
        <List>Your Favorite List is empty.</List>
        <div>
          You can add and track the progress of your Favorite Coins by tapping
          on the
          <RiHeartLine size="1.2rem" color="#ff7b7b" />
          icon for the coin you wish to follow.
        </div>
      </Center>
    </Container>
  );
};

export default EmptyFavoriteList;
