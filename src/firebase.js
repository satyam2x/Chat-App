import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQERd9L_Tx-qmbHxJzgcyCxQmXOipWVeg",
    authDomain: "chat-99f6d.firebaseapp.com",
    projectId: "chat-99f6d",
    storageBucket: "chat-99f6d.appspot.com",
    messagingSenderId: "592487451913",
    appId: "1:592487451913:web:4e2078ff04b2ba7b7c97d8"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()