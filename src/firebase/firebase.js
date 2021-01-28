import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBW12ibkAziCBetN-jJSOvypmJlGHTOiPw",
    authDomain: "expensifiera.firebaseapp.com",
    databaseURL: "https://expensifiera-default-rtdb.firebaseio.com",
    projectId: "expensifiera",
    storageBucket: "expensifiera.appspot.com",
    messagingSenderId: "199976993885",
    appId: "1:199976993885:web:d17e1c36a4c34d42b6b9b4",
    measurementId: "G-NZ0HNFK9KF"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref().set({
//     name: 'Sayeed Mahmood',
//     age: 20,
//     isSingle: true,
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// database.ref().set('This is my data');

// database.ref('age').set(21);
// database.ref('location/city').set('Pune');

