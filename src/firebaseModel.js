import { getDrinkById } from "./DrinkSource";
import UserModel from "./UserModel";
import firebaseConfig from "./firebaseConfig";
import {getDatabase, ref, set, onValue} from "firebase/database";
import { initializeApp } from "firebase/app";


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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
    removeFavoriteFromFirebase
}
