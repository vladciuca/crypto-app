import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  SubContainer,
  Error,
  Message,
  StyledLink,
} from "./NotFound.styles";

export const NotFound = () => {
  const location = useLocation();
  return (
    <Container>
      <SubContainer>
        <div>
          <div>
            <strong>{location.pathname}</strong> is not a valid URL
          </div>
          <Error>404:</Error>
          <Message> Page Not Found</Message>
        </div>
        <StyledLink to="/">Back to Coin Book</StyledLink>
      </SubContainer>
    </Container>
  );
};

export default NotFound;
