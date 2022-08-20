
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAy0IWdnB-QZBvcgAj-dw9NJzOVLVXfXwc",
    authDomain: "instagram-reel-cce6d.firebaseapp.com",
    projectId: "instagram-reel-cce6d",
    storageBucket: "instagram-reel-cce6d.appspot.com",
    messagingSenderId: "730763525117",
    appId: "1:730763525117:web:765ce21a6312e63d407794"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth()