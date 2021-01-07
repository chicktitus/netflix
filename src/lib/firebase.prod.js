import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to seed the database

//  config file here
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase};
