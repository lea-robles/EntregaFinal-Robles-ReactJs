import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwc_aRrOtVyjlPJEbNXLLrp1km3Y3ZVsY",
    authDomain: "pacc-petshop.firebaseapp.com",
    projectId: "pacc-petshop",
    storageBucket: "pacc-petshop.appspot.com",
    messagingSenderId: "547731386667",
    appId: "1:547731386667:web:2b2954a10e81cd8db4156e"
  }

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
