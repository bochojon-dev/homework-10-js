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

// object6
