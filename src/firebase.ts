// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt97qdAvACRoh1l-tXB4kEpHjcgmwBAZM",
  authDomain: "wtnb-blog.firebaseapp.com",
  projectId: "wtnb-blog",
  storageBucket: "wtnb-blog.appspot.com",
  messagingSenderId: "141334053808",
  appId: "1:141334053808:web:eb9ed7bcce467cb4470c75",
  measurementId: "G-G4263NBEJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}