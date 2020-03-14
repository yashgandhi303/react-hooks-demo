import { ref, firebaseAuth } from './database';

export function register(email: string, pw: string) {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
}

export function logout() {
  return firebaseAuth.signOut();
}

export function login(email: string, pw: string) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
}

export function saveUser(userCredentials: firebase.auth.UserCredential) {
  if (!userCredentials || !userCredentials.user) {
    console.error('user could not be saved: ', userCredentials);
    return;
  }

  return ref.collection("users").doc(`${userCredentials.user.uid}`).set({
    email: userCredentials.user.email,
    uid: userCredentials.user.uid,
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
