import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC5AfMl6al0R8fFdoBNHjLOuTW1r5TDMzU",
  authDomain: "react-firebase-5b87a.firebaseapp.com",
  projectId: "react-firebase-5b87a",
  storageBucket: "react-firebase-5b87a.appspot.com",
  messagingSenderId: "258549255684",
  appId: "1:258549255684:web:700bf81189be98561aef51"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage