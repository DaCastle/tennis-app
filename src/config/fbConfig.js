import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBdG17DvimvnWqDMKHOzIltbiwApX6aAdk",
    authDomain: "tennis-app-36b3c.firebaseapp.com",
    databaseURL: "https://tennis-app-36b3c.firebaseio.com",
    projectId: "tennis-app-36b3c",
    storageBucket: "",
    messagingSenderId: "618706206867",
    appId: "1:618706206867:web:1b050cc06bdfe949"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;