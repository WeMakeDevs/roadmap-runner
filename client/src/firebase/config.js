import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjBS9iZ5zvz5vUEt_w2oIVPYcWB5f_Ruw",
  authDomain: "auth-demo-c786c.firebaseapp.com",
  projectId: "auth-demo-c786c",
  storageBucket: "auth-demo-c786c.appspot.com",
  messagingSenderId: "1025993264830",
  appId: "1:1025993264830:web:dd583f6a0ff8f1be5118ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);