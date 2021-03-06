import React from "react";
import { HiMail, FaLinkedin, FaGithubSquare } from "react-icons/all";
import {
  Container,
  SocialMediaRow,
  InfoRow,
  Img,
} from "./ContactFooter.styles";

const ContactFooter = () => (
  <Container>
    <SocialMediaRow>
      <a
        href="https://www.linkedin.com/in/vlad-cristian-2a0b6620a/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size="1.5rem" />
      </a>
      <a href="mailto:vladccdev@gmail.com">
        <HiMail size="1.6rem" />
      </a>
      <a
        href="https://github.com/vladciuca/crypto-app"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare size="1.55rem" />
      </a>
    </SocialMediaRow>
    <InfoRow>
      Created by <strong>Vlad Ciuca</strong> / Powered by
      <Img>
        <img
          src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"
          alt="CoinGheko"
          width="100%"
        />
      </Img>
      <strong>CoinGecko API</strong>
      <span className={"hide-xs"}> - 2021</span>
    </InfoRow>
  </Container>
);

export default ContactFooter;
