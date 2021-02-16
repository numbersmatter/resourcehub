import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBcW8OkeZrG-2fVqPyvkBCXfaIM_fFzNI8", 
  authDomain: "portal-resource.firebaseapp.com",
  projectId: "portal-resource",
  storageBucket: "portal-resource.appspot.com",
  messagingSenderId: "459932923016",
  appId: "1:459932923016:web:feb2c527f58f746d455b3d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;