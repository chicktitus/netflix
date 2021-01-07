import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to seed the database

//  config file here
const config = {
   apiKey: "AIzaSyD-Y2Kp_w-tV9u44UFEgirGqzyrqiSedLw",
    authDomain: "netflix-clone-92935.firebaseapp.com",
    projectId: "netflix-clone-92935",
    storageBucket: "netflix-clone-92935.appspot.com",
    messagingSenderId: "622311001206",
    appId: "1:622311001206:web:0e5475e9ebb49ad7546357"

};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase};
