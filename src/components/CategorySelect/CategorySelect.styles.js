import styled from "styled-components";
import { Menu } from "antd";

export const DropdownContent = styled.div`
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => props.theme.text};
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
  span {
    margin-top: 0.15rem;
    margin-left: 0.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
  }
  :hover {
    background: ${(props) => props.theme.bgSecondary};
  }
`;

export const StyledMenu = styled(Menu)`
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.5rem;
`;

export const Spacer = styled.div`
  display: flex;
  margin-left: 0.2rem;
`;
