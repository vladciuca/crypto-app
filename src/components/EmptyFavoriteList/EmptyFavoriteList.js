import React from "react";
import { RiHeartLine } from "react-icons/ri";
import { Container, Center, List, Icon } from "./EmptyFavoriteList.styles";

const EmptyFavoriteList = () => {
  return (
    <Container>
      <Center>
        <List>Your Favorite List is empty.</List>
        <div>
          You can add and track the progress of your Favorite Coins by tapping
          on the
          <Icon>
            <RiHeartLine size="1rem" color="#ff7b7b" />
          </Icon>
          icon for the coin you wish to follow.
        </div>
      </Center>
    </Container>
  );
};

export default EmptyFavoriteList;
