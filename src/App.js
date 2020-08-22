import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Clock from "./component/clock/Clock";
import Contact from "./component/contact/Contact";
import Navigation from "./component/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Phil" />}
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}
export default App;
