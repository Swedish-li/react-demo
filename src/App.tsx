// import "./App.css";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import { AppLoader } from "./components";

function App() {
  return (
    <React.Suspense fallback={<AppLoader />}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes />
      </Router>
    </React.Suspense>
  );
}

export default App;
