import firebaseConfig from "./firebaseConfig";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function addFavoriteToFirebase(model) {
  const user = getAuth().currentUser.uid;
  set(ref(db, "user/" + user), {
    favorites: model.favoriteDrinks,
  });
}

function removeFavoriteFromFirebase(model) {
  const user = getAuth().currentUser.uid;
  set(ref(db, "user/" + user), {
    favorites: model.favoriteDrinks,
  });
}

function getFavoriteDrinksFromFirebase(model) {
  const user = getAuth().currentUser.uid;

  onValue(ref(db, "user/" + user), (snapshot) => {
    snapshot.val().favorites.map((drinkId) => model.addToFavorites(drinkId));
  });
}

function createUserInFirebase(event, email, password) {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function signInUserInFirebase(event, email, password) {
    const auth = getAuth();
    event.preventDefault();
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

export {
  addFavoriteToFirebase,
  removeFavoriteFromFirebase,
  signInUserInFirebase,
  getFavoriteDrinksFromFirebase,
  createUserInFirebase,
};
