import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
