// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
// import 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBn-tZCrUaR1igEr1aLMXVeRcg19tBVPCs",
//   authDomain: "security-final-105d8.firebaseapp.com",
//   projectId: "security-final-105d8",
//   storageBucket: "security-final-105d8.appspot.com",
//   messagingSenderId: "448555475495",
//   appId: "1:448555475495:web:81fb7e6f7edf5aa5e82402",
//   measurementId: "G-320ZTB8EWC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBn-tZCrUaR1igEr1aLMXVeRcg19tBVPCs",
    authDomain: "security-final-105d8.firebaseapp.com",
    projectId: "security-final-105d8"
});

const db = getFirestore();

export default db;