import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;
