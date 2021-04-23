import React from "react";
import { RiHeartLine } from "react-icons/ri";
import { Container, Paragraph, Icon } from "./EmptyFavoriteList.styles";

export const EmptyFavoriteList = () => {
  return (
    <Container>
      <Paragraph>Your Favorite List is empty.</Paragraph>
      <Paragraph>
        You can add and track the progress of your Favorite Coins by tapping on
        the
        <Icon>
          <RiHeartLine size="1.3rem" color="#ff7b7b" />
        </Icon>
        icon for the coin you wish to follow.
      </Paragraph>
    </Container>
  );
};
