import { FaCaretUp, FaCaretDown } from "react-icons/all";

const CaretSymbol = (props) => {
  const { value } = props;
  if (typeof value === "boolean") {
    return value ? <FaCaretUp /> : <FaCaretDown />;
  }
  if (typeof value === "number") {
    return value < 0 ? <FaCaretDown /> : <FaCaretUp />;
  }
};

export default CaretSymbol;
