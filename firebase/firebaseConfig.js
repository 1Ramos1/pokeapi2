// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxDTob9k5UVUFdorIkxlK4WqbstWsN-ws",
  authDomain: "pokeapi2-1efdd.firebaseapp.com",
  projectId: "pokeapi2-1efdd",
  storageBucket: "pokeapi2-1efdd.firebasestorage.app",
  messagingSenderId: "906210597348",
  appId: "1:906210597348:web:ecff6fb9346866acf48ff1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };