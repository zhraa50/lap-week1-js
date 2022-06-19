const person = [
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

console.log(person);

let names = person.map((stu) => stu.name.toUpperCase());
console.log(names);

let height = person.map((stu) => stu.height.charCodeAt());
console.log(height);

let gender = person.filter((stu) => stu.gender==='male');
console.log(gender);


console.log("Sort by mass:", person.sort((a, b) => a.mass - b.mass)
);
//2. Sort by height
console.log(
  "Sort by height:",
  person.sort((a, b) => b.height - a.height)
);

console.log(
  "Does every character have mass more than 40?",
  person.every((character) => character.mass > 40)
);

console.log(
  "Is every character shorter than 200?",
  person.every((character) => character.height < 200)
);

console.log(
  "Is there at least one male character?",
  person.some((character) => character.gender === "male")
);

console.log(
  "Is there at least one character taller than 210?",
  person.some((character) => character.height > 210)
);

const totalHeight = person.reduce((tot, curr) => tot + curr.height, 0);
console.log(`Total height of all characters: `, totalHeight);





