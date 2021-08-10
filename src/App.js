import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SingInAndSingUpPage from "./pages/sign-in-and-sing-up";
import Header from "./components/header";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  let [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/singin" component={SingInAndSingUpPage} />
      </Switch>
    </div>
  );
};

export default App;
