import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components";
import { Toggle } from "../components/Toggle";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary.color};
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Toggle />
      <ul>
        <li>
          <StyledLink to="/counter">Counter</StyledLink>
        </li>
        <li>
          <StyledLink to="/intl">i18n</StyledLink>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
