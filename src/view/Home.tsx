import { Link } from "react-router-dom";
import { Container } from "../components";

const Home = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/intl">i18n</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
