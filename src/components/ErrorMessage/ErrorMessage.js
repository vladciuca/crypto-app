import React from "react";
import { BiMessageError } from "react-icons/all";
import { Container, Icon, Error, Message } from "./ErrorMessage.styles";

const ErrorMessage = ({ error }) => {
  return (
    <Container>
      <div>
        <Message>
          <Icon>
            <BiMessageError size="1.5rem" />
          </Icon>
          There was an error fetching data...
        </Message>

        <Error>{error}</Error>
      </div>
    </Container>
  );
};

export default ErrorMessage;
