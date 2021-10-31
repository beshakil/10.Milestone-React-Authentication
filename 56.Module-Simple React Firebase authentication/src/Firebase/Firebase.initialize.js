import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAutho = () => {
    initializeApp(firebaseConfig);
}

export default initializeAutho;