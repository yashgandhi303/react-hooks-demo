import { ref, firebaseAuth } from './database';

export function auth(email, pw) {
  return firebaseAuth.createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function checkAuthStatus(user) {
  console.log("checkAuthStatus: ", user);
  if (!user) return false;

  return Object.keys(user).length > 0 && true; // TODO implement
}

export function logout() {
  return firebaseAuth.signOut();
}

export function login(email, pw) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw);
}

export function sendPasswordResetEmail(email) {
  return firebaseAuth.sendPasswordResetEmail(email);
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user);
}
