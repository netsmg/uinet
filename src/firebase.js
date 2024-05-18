import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';
import {getAuth} from 'firebase/auth'
 
const firebaseConfig = {
  
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const fstore = getFirestore(app);
export const fauth = getAuth(app);
