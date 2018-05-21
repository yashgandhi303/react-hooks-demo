import * as firebase from 'firebase';
import { config } from './fire';

firebase.initializeApp(config);
const database = firebase.database();

export const ref = database.ref();
export const firebaseAuth = firebase.auth;