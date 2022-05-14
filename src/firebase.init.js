// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB3yWCANUg7rQl8-Gnl_e1Ly0Ib2i7Doco",
  authDomain: "doctors-portal-f86c8.firebaseapp.com",
  projectId: "doctors-portal-f86c8",
  storageBucket: "doctors-portal-f86c8.appspot.com",
  messagingSenderId: "10915408205",
  appId: "1:10915408205:web:d4f07f95690c4198722f04"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;