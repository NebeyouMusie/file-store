import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7MGucBz8ZvZocNsXw14hPTz7oUnk60U",
  authDomain: "filez-9af7b.firebaseapp.com",
  projectId: "filez-9af7b",
  storageBucket: "filez-9af7b.appspot.com",
  messagingSenderId: "10003218151",
  appId: "1:10003218151:web:c68e2c35ee5969da5eec42",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
