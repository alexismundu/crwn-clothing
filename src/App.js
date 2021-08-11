import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SingInAndSingUpPage from "./pages/sign-in-and-sing-up";
import Header from "./components/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  let [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribeFromAuth.current();
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
