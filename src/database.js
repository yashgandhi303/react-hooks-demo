import * as firebase from 'firebase';
import { config } from './fire';
console.log('db config: ', config);

firebase.initializeApp(config);
const database = firebase.database();

export const ref = database.ref();
export const firebaseAuth = firebase.auth;
