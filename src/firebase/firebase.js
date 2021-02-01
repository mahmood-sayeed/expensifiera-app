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

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 6176283
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// });

// database.ref('ref').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });
