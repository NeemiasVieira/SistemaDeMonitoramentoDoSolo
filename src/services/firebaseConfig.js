import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnLg7Hd-YLkyozELgkgcIL9nCUpgGjQJM",
  authDomain: "tcc-auth-d6ff6.firebaseapp.com",
  projectId: "tcc-auth-d6ff6",
  storageBucket: "tcc-auth-d6ff6.appspot.com",
  messagingSenderId: "301019531096",
  appId: "1:301019531096:web:9a42d5ff9426685bef072d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


//Documentação: https://www.npmjs.com/package/react-firebase-hooks