import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCZoD_vnW5_AQ_-L8Mdrx6jIZPC3-K5p4c",
  authDomain: "tarefas-2568b.firebaseapp.com",
  databaseURL: "https://tarefas-2568b-default-rtdb.firebaseio.com",
  projectId: "tarefas-2568b",
  storageBucket: "tarefas-2568b.appspot.com",
  messagingSenderId: "247146289397",
  appId: "1:247146289397:web:750eb85d4769e53fc4cdbc"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;