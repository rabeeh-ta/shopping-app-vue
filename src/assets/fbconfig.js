import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBV5BXZ-QH4oyTA-E0MNwOrtE7cppoktUQ',
  authDomain: 'rbhchat.firebaseapp.com',
  databaseURL: 'https://rbhchat.firebaseio.com',
  projectId: 'rbhchat',
  storageBucket: 'rbhchat.appspot.com',
  messagingSenderId: '1049291089027',
  appId: '1:1049291089027:web:eab679597740223b9867b6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebase.firestore();
