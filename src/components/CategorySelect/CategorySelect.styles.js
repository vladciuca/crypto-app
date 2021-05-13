import styled from "styled-components";
import { Menu } from "antd";

export const DropdownContent = styled.div`
  padding: 0 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  :hover {
    color: ${(props) => props.theme.text};
    background: transparent;
  }
  :focus {
    color: ${(props) => props.theme.text};
    background: transparent;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

export const StyledMenuItem = styled((props) => <Menu.Item {...props} />)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  div {
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    margin-top: 0.15rem;
    margin-left: 0.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
  }
  :hover {
    background: ${(props) => props.theme.cardSecondary};
  }
`;

export const StyledMenu = styled(Menu)`
  background: ${(props) => props.theme.cardPrimary};
  border-radius: 0.5rem;
`;
