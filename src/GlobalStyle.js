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
  background: transparent;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.bgSecondary};
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}

${radio}
.hide-xs {
  @media (min-width: 375px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: block;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    display: block;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    display: block;
  }
}
.show-xs {
  @media (min-width: 375px) and (max-width: 576px) {
    display: block;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    display: none;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    display: none;
  }
}
.hide-sm {
  @media (min-width: 375px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: block;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    display: block;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    display: block;
  }
}
.hide-sm-md {
  @media (min-width: 375px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    display: block;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    display: block;
  }
}
`;
