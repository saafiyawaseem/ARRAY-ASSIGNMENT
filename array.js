import chalk from 'chalk';
console.log(chalk.blue("Array is a collection of data used to multiple store data just like a CUPBOARD which consist partition "));
const student = ["fatima", "Javeriya", "Imsa", "Haniya", "Amina"];
let number = [101, 210, 300, 425, 515,];
let boolArray = [true, false, true, true, false];
let mixedArray = ["fatima", 210, true];
console.log(student, mixedArray);
console.log(number, boolArray);
const faculty = ["Minnahil", "Dua", "Hamza", "Ameen Alam", "Bilal"];
let facultyNumber = [1, 2, 3, 4, 5, 6];
console.log(faculty, facultyNumber);
let countries = ["PAKISTAN", "SAUDIA", "TURKEY", "UAE", "CANADA"];
countries[4] = "IRAN";
console.log(countries, "countries");
console.log(countries, "countries before");
boolArray = [true, true, false, true, false];
mixedArray = ["PAKISTAN", 4, true];
let newArray = ["Maria", "Minnahil", "Hamza"]; //if we assign type string in array then we cannot define number will be show error. 
//so we wil remove it.
console.log(countries, mixedArray);
console.log(newArray[1]);
console.log(countries[4], countries[3]);
console.log(faculty[2]);
let daysName = ["friday", "saturday", "monday", "tuesday", "wednesday", "thursday"];
let dayNumber = [1, 2, 3, 4, 5, 6, 7];
daysName.push("sunday");
console.log(daysName, "daysName");
dayNumber.push(8, 9);
console.log(dayNumber, dayNumber);
//inside the array any value for add we can use .push()
//it adds in last.
// NOW WE CAN TEACH .POP() MEANS delete.
//IT deleteS FROM Last.
//IN ROUND BRESIS WE DONOT WRITE ANY THING IN .POP ()
let teacher = ["SUMNA", "FARHA", "SAMREEN", "ASMA", "IRUM"];
teacher.unshift("SAMIYA");
console.log(teacher, "teacher");
//when we use .unshift() then will come before.
countries.unshift("bisma");
console.log(countries, "countries");
