// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBf5l96iVvPqY39IMYAl8hoLiTRU6brT1M',
  authDomain: 'twitter-clone-d6d19.firebaseapp.com',
  projectId: 'twitter-clone-d6d19',
  storageBucket: 'twitter-clone-d6d19.appspot.com',
  messagingSenderId: '863686987556',
  appId: '1:863686987556:web:3a00b08da32fc333ddedb1',
  measurementId: 'G-P2E3BGZB3S',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export default db
