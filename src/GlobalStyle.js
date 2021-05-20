import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Exo', sans-serif;
  margin: 0;
  padding: 0;
}
body { 
  background-color:  ${(props) => props.theme.bgPrimary};
  background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(165,255,205,0.15) 100.2% );
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
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.secondary};
}
`;
