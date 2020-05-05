import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyAlabyOqmRz19S8Oqzve_13n5Pnf4ItHjg",
    authDomain: "react-foodapp.firebaseapp.com",
    databaseURL: "https://react-foodapp.firebaseio.com",
    projectId: "react-foodapp",
    storageBucket: "react-foodapp.appspot.com",
    messagingSenderId: "998478249321",
    appId: "1:998478249321:web:150a911b6644f58c9991f8",
    measurementId: "G-ZNW9KLQZHY"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;