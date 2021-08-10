import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp9NyE2hK4kxk6yDptr_dEBORBvdWewTc",
  authDomain: "crwn-db-1aa36.firebaseapp.com",
  projectId: "crwn-db-1aa36",
  storageBucket: "crwn-db-1aa36.appspot.com",
  messagingSenderId: "588329299600",
  appId: "1:588329299600:web:7e2dc12862102f898db215",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
