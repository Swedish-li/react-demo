import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
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
