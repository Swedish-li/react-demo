import { Switch, Route } from "react-router-dom";
import { Counter } from "../features/counter/Counter";
import Home from "../view/Home";
import Intl from "../view/intl";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/intl">
        <Intl />
      </Route>
    </Switch>
  );
};

export default Routes;
