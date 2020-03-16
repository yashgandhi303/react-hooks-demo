import 'firebase/auth';
import 'firebase/database';
import { config } from '../constants/firebaseConfig';
import firebase from "firebase";

firebase.initializeApp(config);
const db = firebase.firestore();

export const ref = db;
export const firebaseAuth = firebase.auth();
