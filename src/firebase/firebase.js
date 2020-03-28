import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};


// // child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
//
// // database.ref('expenses').once('value').then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnap) => {
// //         expenses.push({
// //             id: childSnap.key,
// //             ...childSnap.val()
// //         })
// //     });
// //     console.log(expenses);
// // });
// //
// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnap) => {
// //         expenses.push({
// //             id: childSnap.key,
// //             ...childSnap.val()
// //         })
// //     });
// //     console.log(expenses);
// // });
//
// // const expenses = [{
// //     description: 'Water bill',
// //     amount: 5520,
// //     note: 'water note',
// //     createdAt: 0
// // }, {
// //     description: 'Gas bill',
// //     amount: 1000,
// //     note: 'gaz note',
// //     createdAt: -1000
// // }, {
// //     description: 'Arnona',
// //     amount: 99999,
// //     note: 'Arnona note',
// //     createdAt: 1000
// // }];
// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);
//
//
//
// // const notes = [{
// //     id:'12',
// //     title:'First note',
// //     body: 'This is my note'
// // }, {
// //     id:'761ase',
// //     title:'another note',
// //     body: 'This is my note'
// // }];
//
// // database.ref().on('value', (snapshot) => {
// //     const data = snapshot.val();
// //     console.log(data.name + ' is a ' + data.job.title + ' at ' + data.job.company);
// // });
// //
// // setTimeout(() => {
// //     database.ref().update({
// //         name: 'Andrew',
// //         'job/company': 'Google',
// //         'job/title': 'Software Developer'
// //     });
// // }, 5000);
// // const data = database.ref().once('value').then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e) => {
// //     console.log('Error fetching data ', e);
// // });
//
// // database.ref().set({
// //     name: 'Omer Feldman',
// //     age: 19,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Devops engineer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Kfar Sava',
// //         country: 'Israel'
// //     }
// // });
//
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Hertzelia'
// // });
//
//
