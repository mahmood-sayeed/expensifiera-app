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

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 6176283
});

database.ref('expenses').push({
    description: 'Phone bill',
    note: '',
    amount: 5900,
    createdAt: 6176283
});

database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 6176283
});