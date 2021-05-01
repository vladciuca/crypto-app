import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
body {
  background-color:  ${(props) => props.theme.bgPrimary};
  background-image: radial-gradient(circle at top left, ${(props) =>
    props.theme.bgSecondary},  ${(props) => props.theme.bgPrimary} 50%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.text};
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0.4rem;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.cardPrimary};;
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.primary};
}
.App {
  text-align: center;
}
`;
