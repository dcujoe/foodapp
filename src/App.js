import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/Header/header.component.jsx";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {

  return (
  <div>
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    
  </div>
  );
}

export default App;
