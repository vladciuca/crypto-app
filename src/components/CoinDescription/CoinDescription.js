import { FaBookOpen, IoCube, AiFillTags } from "react-icons/all";
import {
  Container,
  Category,
  Tab,
  Icon,
  Header,
} from "./CoinDescription.styles";

const CoinDescription = ({ description, categories, links }) => {
  return (
    <Container>
      <Header>
        <Tab>
          <Icon>
            <AiFillTags />
          </Icon>
          Tags
        </Tab>
        {categories &&
          Object.values(categories).map((value) => {
            return <Category key={value}>{value}</Category>;
          })}
      </Header>
      <Header>
        <Tab>
          <Icon>
            <IoCube />
          </Icon>
          Explorers
        </Tab>
        {Object.values(links.blockchainSite).map((value) => {
          if (value === "") {
            return;
          } else {
            return (
              <Category key={value}>
                <a href={value}>{value}</a>
              </Category>
            );
          }
        })}
      </Header>
      <Tab>
        <Icon>
          <FaBookOpen />
        </Icon>
        Description
      </Tab>
      <div
        dangerouslySetInnerHTML={{
          __html: description.en || "",
        }}
      ></div>
    </Container>
  );
};

export default CoinDescription;
