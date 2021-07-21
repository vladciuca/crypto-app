import { createGlobalStyle, css } from "styled-components";

const radio = css`
  .ant-radio-wrapper {
    span {
      color: ${(props) => props.theme.text};
    }
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${(props) => props.theme.primary} !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: ${(props) => props.theme.primary};
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: ${(props) => props.theme.primary};
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Exo', sans-serif;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
body { 
  background-color:  ${(props) => props.theme.bgPrimary};
  background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(66,39,90,0.15) 100.2% );
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.text};
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0.3rem;
  background: transparent;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.bgPrimary};
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}

${radio}

.show-xs {
  display: block;
  @media (min-width: 576px) {
    display: none;
  }
}

.hide-xs {
  @media (max-width: 576px) {
    display: none;
  }
}

.hide-sm {
  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
}

.hide-sm-md {
  @media (min-width: 375px) and (max-width: 992px) {
    display: none;
  }
}
`;
