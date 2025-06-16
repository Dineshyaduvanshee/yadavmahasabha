import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClRvcDVfxJwGOIzRSs4HuQUUb01FZcdvk",
  authDomain: "yadavmahasabhaapp-3f48d.firebaseapp.com",
  projectId: "yadavmahasabhaapp-3f48d",
  storageBucket: "yadavmahasabhaapp-3f48d.appspot.com",
  messagingSenderId: "726215383307",
  appId: "1:726215383307:web:cc2c03b16d6147770bea0e",
  measurementId: "G-X8RC073464"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // ✅ Online Firestore
export const storage = getStorage(app);
