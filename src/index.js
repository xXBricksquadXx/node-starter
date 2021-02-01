import { studentData } from "./lib";

// get a list of all student last names and ids
// only those that scored below 70
const lowScores = studentData.filter((scoreLow) => scoreLow.score <= 70);

console.log(lowScores);
