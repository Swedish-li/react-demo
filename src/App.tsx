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
function absorbEvent_(event: TouchEvent) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node: HTMLElement) {
  node.ontouchstart = absorbEvent_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}

export function init() {
  const nodeList = document.getElementsByTagName("a");
  for (let n = 0; n < nodeList.length; n++) {
    preventLongPressMenu(nodeList[n]);
  }
}
init();
function App() {
  return (
    <AppWrapper>
      <React.Suspense fallback={<AppLoader />}>
        <Router>
          <Routes />
        </Router>
      </React.Suspense>
    </AppWrapper>
  );
}

export default App;
