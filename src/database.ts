import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {isDev} from './constants/config';
import {config} from './constants/firebaseConfig';

if (isDev) {
  console.info('db config: ', config);
}

firebase.initializeApp(config);
const database = firebase.database();

export const ref = database.ref();
export const firebaseAuth = firebase.auth();
