import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../view/Home"));
const Intl = lazy(() => import("../view/intl"));
const CounterView = lazy(() => import("../view/counter"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/counter">
        <CounterView />
      </Route>
      <Route path="/intl">
        <Intl />
      </Route>
    </Switch>
  );
};

export default Routes;
