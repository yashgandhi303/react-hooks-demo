import firebase from 'firebase/app';
import 'firebase/database';
import { isDev } from './constants';
import { config } from './fire';

if (isDev) {
  console.log('db config: ', config);
}

firebase.initializeApp(config);
const database = firebase.database();

export const ref = database.ref();
export const firebaseAuth = firebase.auth;
