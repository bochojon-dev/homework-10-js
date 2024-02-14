// UYGA VAZIFA

// object1
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesWithGrade(students, grade) {
  let onlyWithGrades = students.filter((el, i, arr) => {
    switch (grade) {
      case 5:
        return el.percent >= 85 && el.percent <= 100;
      case 4:
        return el.percent >= 70 && el.percent < 85;
      case 3:
        return el.percent >= 60 && el.percent < 70;
      default:
        return false;
    }
  });
  let arr = onlyWithGrades.map((el, i, arr) => el.name);
  return arr;
}
console.log(
  getNamesWithGrade(
    [
      { name: "Quincy", percent: 96, grade: 5 },
      { name: "Jason", percent: 84, grade: 4 },
      { name: "Alexis", percent: 100, grade: 5 },
      { name: "Sam", percent: 65, grade: 3 },
      { name: "Katie", percent: 90, grade: 5 },
      { name: "Anna", percent: 75, grade: 4 },
    ],
    3
  )
);
