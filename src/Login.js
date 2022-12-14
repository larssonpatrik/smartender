import firebase from 'firebase';

function login(email, password) {
  firebase.signInWithEmailAndPassword(email, password)
}


export {login}