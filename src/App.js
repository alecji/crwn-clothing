import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

import "./App.css";

const Hats = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
