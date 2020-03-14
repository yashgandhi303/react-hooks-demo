import { ref, firebaseAuth } from './database';

export const register = (email: string, pw: string) => {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
}

export const logout = () => {
  return firebaseAuth.signOut();
}

export const login = (email: string, pw: string) => {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
}

export const saveUser = (userCredentials: firebase.auth.UserCredential) => {
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
