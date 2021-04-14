import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const CaretSymbol = (props) => {
  // return props.value < 0 ? <FaCaretUp /> : <FaCaretDown />;
  if (typeof props.value === "boolean") {
    return props.value ? <FaCaretUp /> : <FaCaretDown />;
  }
  if (typeof props.value === "number") {
    return props.value < 0 ? <FaCaretDown /> : <FaCaretUp />;
  }
};
