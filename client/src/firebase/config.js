import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNsiVmymWPEtHxWvdEqioWTOK_5fFQrkc",
  authDomain: "roadmap-runner.firebaseapp.com",
  projectId: "roadmap-runner",
  storageBucket: "roadmap-runner.appspot.com",
  messagingSenderId: "249155515734",
  appId: "1:249155515734:web:5970d29e93937095e3d2f7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);