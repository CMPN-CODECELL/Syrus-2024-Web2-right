// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoWeLpTJtR9vq5ru_ybMTlZeIMKh_C_yU",
//   authDomain: "syrus-512bb.firebaseapp.com",
//   projectId: "syrus-512bb",
//   storageBucket: "syrus-512bb.appspot.com",
//   messagingSenderId: "5162445490",
//   appId: "1:5162445490:web:410bf19afc0c7d818377ab",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnDIjSWV-rC8MmKE1wZdwD4-bTlDUEfBY",
  authDomain: "syrus-12eae.firebaseapp.com",
  projectId: "syrus-12eae",
  storageBucket: "syrus-12eae.appspot.com",
  messagingSenderId: "608199537465",
  appId: "1:608199537465:web:ea7746567849cfc1c1aee8",
  measurementId: "G-5RPJM592CJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
