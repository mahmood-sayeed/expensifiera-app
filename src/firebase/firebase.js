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

//to fetch data ..1
// database.ref()      //can put ref as 'location' or 'location/city' for specific fetch
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//fetch data ...2   This has a callback every time data updates like subscription
database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off();       //unsubscribe
}, 7000);


const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref().off(onValueChange);       //unsubscribe single subs
}, 9000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

//to set data
// database.ref().set({
//     name: 'Sayeed Mahmood',
//     age: 20,
//     stressLevel: 4,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

//to remove --2
// database.ref('isSingle').set(null);

//to remove --1
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });

//to update
// database.ref().update({
//     name: 'Hashir',
//     age: '23',
//     job: 'Software Developer',
//     isSingle: null
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
