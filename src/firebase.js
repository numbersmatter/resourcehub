import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3yFnkcv5pw28UoP25HiXeXPwTX-UAG8w",
    authDomain: "api-resource-dev.firebaseapp.com",
    projectId: "api-resource-dev",
    storageBucket: "api-resource-dev.appspot.com",
    messagingSenderId: "806647119220",
    appId: "1:806647119220:web:8c08f7500812aa899e8021"
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;