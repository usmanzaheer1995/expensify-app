//////////////////// OBJECT DESTRUCTURING //////////////////////

// const person = {
//   name: 'Usman',
//   age: 22,
//   location: {
//     city: 'Rawalpindi',
//     temp: 16
//   }
// };

// // default value for name is now anonymous
// const { name = 'anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// // setting temp to another variable
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

////////////////////////////////////////////////////////////////

//////////////////// ARRAY DESTRUCTURING //////////////////////

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19417'
];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

//////////////////////////////////////////////////////////////
