import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SingInAndSingUpPage from "./pages/sign-in-and-sing-up";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/singin" component={SingInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
