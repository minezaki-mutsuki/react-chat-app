import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD146YsHNuWsqW9ULgnKtabJnn-dkeKLRU",
    authDomain: "fir-intro-dd821.firebaseapp.com",
    projectId: "fir-intro-dd821",
    storageBucket: "fir-intro-dd821.appspot.com",
    messagingSenderId: "322703841680",
    appId: "1:322703841680:web:b49cfa0ad7996b094e3b15",
    measurementId: "G-9ND83Q39DD"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
