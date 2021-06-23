import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Exo', sans-serif;
  margin: 0;
  padding: 0;
}
body {
  background-color:  ${(props) => props.theme.bgPrimary};
  background-image: radial-gradient( circle farthest-corner at -10% -30%,  
    ${(props) => props.theme.bgComplementary} 0%, 
    ${(props) => props.theme.bgSecondary} 30%,
    ${(props) => props.theme.bgPrimary} 60%,
    ${(props) => props.theme.bgSecondary} 80%, 
    ${(props) => props.theme.bgComplementary} 130% );  
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
`;
