import { getDrinkById } from "./DrinkSource";
import UserModel from "./UserModel";
import firebaseConfig from "./firebaseConfig";
import {getDatabase, ref, set, onValue} from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function signInUserInFirebase(event, email, password) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

function addFavoriteToFirebase(model) {
    set(ref(db,"user/1"), {
        favorites: model.favoriteDrinks 
    })
}

function removeFavoriteFromFirebase(model) {
    set(ref(db,"user/1"), {
        favorites: model.favoriteDrinks 
    })
}

export {
    addFavoriteToFirebase,
    removeFavoriteFromFirebase,
    signInUserInFirebase
}
