import firebase from 'firebase/app';
import 'firebase/storage';


var config = {
    apiKey: "AIzaSyDcvn1u_a5PB7q5SJ--UGBwtNpZ3MQ10x4",
    authDomain: "my-shop-2a794.firebaseapp.com",
    databaseURL: "https://my-shop-2a794.firebaseio.com",
    projectId: "my-shop-2a794",
    storageBucket: "my-shop-2a794.appspot.com",
    messagingSenderId: "466270071649"
  };
firebase.initializeApp(config);


const storage = firebase .storage();

export {
    storage,firebase as default
}