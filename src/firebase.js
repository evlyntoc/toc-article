import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCixzk6vZCZ93nxtLt0b29zdPhxKRmS8lg",
    authDomain: "fireblogsyt-77362.firebaseapp.com",
    projectId: "fireblogsyt-77362",
    storageBucket: "fireblogsyt-77362.appspot.com",
    messagingSenderId: "310988728962",
    appId: "1:310988728962:web:6496a726fd42cd32e6629b"
  };
  
// const firebaseConfig = {
//     apiKey: "AIzaSyCm-d6P3OVnjBTUMuGna0nbcJj8GONSvuY",
//     authDomain: "gamespot-5de28.firebaseapp.com",
//     projectId: "gamespot-5de28",
//     storageBucket: "gamespot-5de28.appspot.com",
//     messagingSenderId: "528078870408",
//     appId: "1:528078870408:web:570b17c223fc9d3e1b8c3d"
//   };


// const firebaseConfig = {
//     apiKey: "AIzaSyBKEd6ILur0ivme0Mcr1xsgOSGN55q4BZo",
//     authDomain: "gamespot-fd0a4.firebaseapp.com",
//     projectId: "gamespot-fd0a4",
//     storageBucket: "gamespot-fd0a4.appspot.com",
//     messagingSenderId: "1039438838741",
//     appId: "1:1039438838741:web:4190a2408233b01bccdb5c",
//     measurementId: "G-R37M71278J"
// };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    firebaseApp,
    auth,
    db
}