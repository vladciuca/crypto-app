import { useState } from "react";
import DOMPurify from "dompurify";
import { FaBookOpen } from "react-icons/all";
import {
  Container,
  ShowBtn,
  Category,
  Icon,
  Header,
  Spacer,
} from "./CoinDescription.styles";

const CoinDescription = ({ description, categories }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const shortString = description.en.length < 300;
  const descriptionString = isTruncated
    ? description.en.slice(0, 300)
    : description.en;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  console.log(description.en === "");

  if (description.en === "") {
    return <Spacer />;
  } else {
    return (
      <Container>
        <Header>
          {categories &&
            Object.values(categories).map((value) => {
              return <Category key={value}>{value}</Category>;
            })}
        </Header>

        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(descriptionString) || "",
          }}
        ></span>
        {!shortString && isTruncated ? "..." : ""}

        {shortString ? (
          ""
        ) : (
          <ShowBtn>
            <span onClick={toggleIsTruncated}>
              <Icon>
                <FaBookOpen />
              </Icon>
              {isTruncated ? "Read More" : "Read Less"}
            </span>
          </ShowBtn>
        )}
      </Container>
    );
  }

  // return (
  //   <Container>
  //     <Header>
  //       {categories &&
  //         Object.values(categories).map((value) => {
  //           return <Category key={value}>{value}</Category>;
  //         })}
  //     </Header>

  //     <span
  //       dangerouslySetInnerHTML={{
  //         __html: DOMPurify.sanitize(descriptionString) || "",
  //       }}
  //     ></span>
  //     {!shortString && isTruncated ? "..." : ""}

  //     {shortString ? (
  //       ""
  //     ) : (
  //       <ShowBtn>
  //         <span onClick={toggleIsTruncated}>
  //           <Icon>
  //             <FaBookOpen />
  //           </Icon>
  //           {isTruncated ? "Read More" : "Read Less"}
  //         </span>
  //       </ShowBtn>
  //     )}
  //   </Container>
  // );
};

export default CoinDescription;
