import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCg7ny9EHwS3CV9KfOZMVYly_YNqJbR6OU",
  authDomain: "flathunt-84374.firebaseapp.com",
  projectId: "flathunt-84374",
  storageBucket: "flathunt-84374.appspot.com",
  messagingSenderId: "340031589046",
  appId: "1:340031589046:web:1dbe70c49f4ad3f841f417",
  measurementId: "G-0R2ZSTRJ37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
