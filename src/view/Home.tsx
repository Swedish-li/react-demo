import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/intl">Intl</Link>
      </li>
    </ul>
  );
};

export default Home;
