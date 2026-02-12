import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCN3Z-SsOdmoFOLZP6NKiW9wDjMmA1M2bI",
    authDomain: "ipapps1.firebaseapp.com",
    projectId: "ipapps1",
    storageBucket: "ipapps1.firebasestorage.app",
    messagingSenderId: "386365310550",
    appId: "1:386365310550:web:959c17361a7daee6705df7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log('hi')