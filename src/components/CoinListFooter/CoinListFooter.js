import React from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { Footer, Button, Icon } from "./CoinListFooter.styles";

const CoinListFooter = () => {
  return (
    <Footer>
      <Button>
        Back to Top
        <Icon>
          <IoMdArrowDropupCircle size="1.1rem" />
        </Icon>
      </Button>
    </Footer>
  );
};

export default CoinListFooter;
