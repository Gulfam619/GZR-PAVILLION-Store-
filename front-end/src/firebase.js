
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMXtKzej3MWZeaj8J8gFEAZHfv3HquinM",
  authDomain: "ecommercestore-f45ce.firebaseapp.com",
  projectId: "ecommercestore-f45ce",
  storageBucket: "ecommercestore-f45ce.appspot.com",
  messagingSenderId: "381483336678",
  appId: "1:381483336678:web:36be68e45676dd60ea0c27",
  measurementId: "G-6BK37RKM8P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();