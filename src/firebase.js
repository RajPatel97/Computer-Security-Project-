import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBn-tZCrUaR1igEr1aLMXVeRcg19tBVPCs",
    authDomain: "security-final-105d8.firebaseapp.com",
    projectId: "security-final-105d8"
});

const db = getFirestore();

export default db;
