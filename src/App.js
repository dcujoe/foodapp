import React from 'react';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';


import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/Header/header.component.jsx";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SignUp from "./components/sign-up/sign-up.component.jsx";
import { setCurrentUser } from "./redux/user/user.actions.js";



class App extends React.Component {

  
  unsubscribeFromAuth = null

  componentDidMount() {
    
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
        });
     }

     setCurrentUser(userAuth);
    });

  }


  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
  return (
  <div>
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route exact path="/signin" component={SignInAndSignUpPage} />
    </Switch>
    </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(
  null,
  mapDispatchToProps,
  )(App);