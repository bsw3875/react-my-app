import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Clock from "./component/clock/Clock";
import Contact from "./component/contact/Contact";
import Navigation from "./component/navigation/Navigation";
import Jeopardy from "./component/jeopardy/Jeopardy";
import Page404 from "./component/page404/Page404";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Phil" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}
export default App;
