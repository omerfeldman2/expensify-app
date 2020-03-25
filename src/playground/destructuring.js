// console.log('destructuring');
// const person = {
//     name: 'omer',
//     age: 19,
//     location: {
//         city: 'kfar sava',
//         temp: 15
//     }
// };
//
// const {name: firstname = 'anonymous', age} = person;
// console.log(firstname + ' is ' + age);
//
// // const name = person.name;
// // const age = person.age;
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log("It's " + temperature + " in " + city);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//
// const address = ['14 ben gurion', 'Kfar sava','Israel', '4421157'];
//
// const [, city, state = 'New York'] = address;
//
// console.log('Yot are in ' + city + ' ' + state + '.');
//
//

const item = ['Coffe (hot)', '$2.00', '$2.50','$2.75'];
const [product, , mprice] = item;

console.log('A medium ' + product + ' costs ' + mprice);






