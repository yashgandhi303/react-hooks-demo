import {ref, firebaseAuth} from './database';

export function register(email: string, pw: string) {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((err: Error) => {
      console.error('error: ', err);
    });
}

export function logout() {
  return firebaseAuth.signOut();
}

export function login(email: string, pw: string) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
}

export function sendPasswordResetEmail(email: string) {
  return firebaseAuth.sendPasswordResetEmail(email);
}

export function saveUser(userCredentials: firebase.auth.UserCredential) {
  console.log('userCredentials: ', userCredentials);
  if (!userCredentials || !userCredentials.user) {
    console.error('user could not be saved: ', userCredentials);
    return;
  }
  console.log('user: ', userCredentials.user);
  return ref
    .child(`users/${userCredentials.user.uid}/info`)
    .set({
      email: userCredentials.user.email,
      uid: userCredentials.user.uid,
    })
    .then(() => userCredentials.user)
    .catch((err: Error) => console.error('error: ', err));
}
