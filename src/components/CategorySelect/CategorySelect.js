import React from "react";
import { Dropdown } from "antd";
import { FaCaretDown } from "react-icons/all";
import {
  StyledMenu,
  StyledMenuItem,
  DropdownContent,
} from "./CategorySelect.styles";

const CategorySelect = ({ obj, label, handleSelect }) => {
  const menu = (
    <StyledMenu onClick={handleSelect}>
      {Object.values(obj).map((item) => {
        return (
          <StyledMenuItem key={item.key}>
            <span>{item.value}</span>
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
  return (
    <Dropdown overlay={menu}>
      <DropdownContent>
        {label}
        <FaCaretDown size="1.2rem" />
      </DropdownContent>
    </Dropdown>
  );
};

export default CategorySelect;
