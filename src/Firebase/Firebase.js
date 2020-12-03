import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1dnuR7i8_Nv9ZaHwd6Z7FgoG7FQefuEQ",
    authDomain: "whatsapp-simple-project.firebaseapp.com",
    databaseURL: "https://whatsapp-simple-project.firebaseio.com",
    projectId: "whatsapp-simple-project",
    storageBucket: "whatsapp-simple-project.appspot.com",
    messagingSenderId: "926197801005",
    appId: "1:926197801005:web:c1e0bc4165876b7f3458a4"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
export default db;


