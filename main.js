// UYGA VAZIFA

// // object1
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesWithGrade(students, grade) {
//   let onlyWithGrades = students.filter((el, i, arr) => {
//     switch (grade) {
//       case 5:
//         return el.percent >= 85 && el.percent <= 100;
//       case 4:
//         return el.percent >= 70 && el.percent < 85;
//       case 3:
//         return el.percent >= 60 && el.percent < 70;
//       default:
//         return false;
//     }
//   });
//   let arr = onlyWithGrades.map((el, i, arr) => el.name);
//   return arr;
// }
// console.log(
//   getNamesWithGrade(
//     [
//       { name: "Quincy", percent: 96, grade: 5 },
//       { name: "Jason", percent: 84, grade: 4 },
//       { name: "Alexis", percent: 100, grade: 5 },
//       { name: "Sam", percent: 65, grade: 3 },
//       { name: "Katie", percent: 90, grade: 5 },
//       { name: "Anna", percent: 75, grade: 4 },
//     ],
//     3
//   )
// );

// // object2
// let animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// let wordCount = animals.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);

// // object3
// let numbers = [1, 2, 3, 4, 5];
// let quadratic = numbers.map((el) => el ** 2);
// console.log(quadratic);

// // object4
// let numbers = [1, -4, 12, 0, -3, 29, -150];
// let positiveNumbers = numbers.filter((num) => num > 0);
// let summ = positiveNumbers.reduce((acc, el) => acc + el, 0);
// console.log(summ);

// // object5
// let string = "George Raymond Richard Martin";
// let words = string.split(" ");
// let firstLetters = words.map((word) => word[0]);
// let result = firstLetters.join("");
// console.log(`so'zlarning birinchi bosh harflari: ${result}`);

// // object6
// let people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// people.sort((a, b) => a.age - b.age);
// let youngest = people[0];
// let oldest = people[people.length - 1];
// let ageDifference = oldest.age - youngest.age;
// console.log(ageDifference);

// // object7
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evens = numbers.filter((number) => number % 2 === 0);
// let odds = numbers.filter((number) => number % 2 === 1);
// console.log("Juft sonlar:", evens);
// console.log("Toq sonlar:", odds);

// // object8
// const numbers = [2, 1, 5, 6, 12, 2, 3, 4, 2, 5, 6, 3, 7, , 13, 8, 14, 9, 4];
// const uniqueNumbers = numbers.reduce((acc, number) => {
//   if (!acc.includes(number)) {
//     acc.push(number);
//   }
//   return acc;
// }, []);
// console.log(uniqueNumbers);

// // object9
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// let sortById = products.sort((a, b) => a.id - b.id);
// console.log("Sorted by id:", sortById);
// let sortByName = products.sort((a, b) => a.name.localeCompare(b.name));
// console.log("Sorted by name:", sortByName);
// let sortByPrice = products.sort((a, b) => a.price - b.price);
// console.log("Sorted by price:", sortByPrice);
// let sortByRating = products.sort((a, b) => b.rating - a.rating);
// console.log("Sorted by rating:", sortByRating);
// let sortByDiscount = products.sort((a, b) => b.discount - a.discount);
// console.log("Sorted by discount:", sortByDiscount);

// // object10
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortByRating = products.sort((a, b) => b.rating - a.rating);
// let highRated = sortByRating[0];
// console.log("eng yuqori darajali mahsulot:", highRated);

// // object11
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortByPrice = products.sort((a, b) => a.price - b.price);
// let lowPriced = sortByPrice[0];
// console.log("eng arzon mahsulot:", lowPriced);

// // object12
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let Summ = products.reduce((summ, el) => summ + el.price, 0);
// console.log("mahsulotlarning umumiy narxi:", Summ);

// // object13
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let names = products.map((product) => product.name);
// console.log("Product names:", names);

// // object14
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let Id = products.find((el) => el.id === 5);
// if (Id) {
//   console.log("id 5 bo'lgan mahsulot nomi:", Id.name);
// } else {
//   console.log("id 5 bolgan mahsulot mavjud emas");
// }

// object15
let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

let Id4 = products.filter((el) => el.id !== 4);
console.log("id 4 mahsulot o'chirildi:", Id4);
