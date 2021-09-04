// import "./App.css";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import React from "react";
import { AppLoader } from "./components";
import styled from "styled-components";

const AppWrapper = styled.div`
  color: ${({ theme }) => theme.primary.color};
  background-color: ${({ theme }) => theme.primary.backgroundColor};
`;

function App() {
  return (
    <AppWrapper>
      <React.Suspense fallback={<AppLoader />}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes />
        </Router>
      </React.Suspense>
    </AppWrapper>
  );
}

export default App;
