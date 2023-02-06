import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2AYToAaGEISObEKMSSGoaJ5cxoC-nOIU",
  authDomain: "raniexpress.firebaseapp.com",
  databaseURL: "https://raniexpress-default-rtdb.firebaseio.com",
  projectId: "raniexpress",
  storageBucket: "raniexpress.appspot.com",
  messagingSenderId: "606947606360",
  appId: "1:606947606360:web:a5d73b1b665adde50a2f2d",
  measurementId: "G-YX3BH4TJJS",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
