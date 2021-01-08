import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
   apiKey: "AIzaSyD-Y2Kp_w-tV9u44UFEgirGqzyrqiSedLw",
  authDomain: "netflix-clone-92935.firebaseapp.com",
  projectId: "netflix-clone-92935",
  storageBucket: "netflix-clone-92935.appspot.com",
  messagingSenderId: "622311001206",
  appId: "1:622311001206:web:0e5475e9ebb49ad7546357"

};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
