'use strict';
// Variable declaration
let a = 7;
let b = 2;
let sum = a + b;
let difference = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;
let power = a ** b;
let root = a ** (1 / b);

// Custom logging
console.log('Var a: ' + a + '  Var b: ' + b);
console.log('sum = a + b: ' + sum);
console.log('difference = a - b: ' + difference);
console.log('multiplication = a * b: ' + multiplication);
console.log('division = a / b: ' + division);
console.log('remainder = a % b: ' + remainder);
console.log('power = a ** b: ' + power);
console.log('root = a ** (1 / b): ' + root);

//  Variable RE-DECLARATION
a = 7;
b = -5;

console.log('Var a and b has been redeclared as so:', { a, b });

// Logging as an object
console.log({
  a,
  b,
  sum,
  difference,
  multiplication,
  division,
  remainder,
  power,
  root
});

// Creating an object
let student1 = {
  name: 'Jack',
  surname: 'Not Daniels',
  course: 2,
  age: 25,
  intrest: 'male',
  gender: 'male',
  minimumAge: 20,
  maximumAge: 30
};

let student2 = {
  name: 'Valodia',
  surname: 'Klimecenko',
  course: 1,
  age: 22,
  intrest: 'female',
  gender: 'male',
  minimumAge: 18,
  maximumAge: 24
};

let student3 = {
  name: 'Jessica',
  surname: 'Blond',
  course: 1,
  age: 19,
  intrest: 'male',
  gender: 'female',
  minimumAge: 19,
  maximumAge: 25
};

// Use object properties
// -- using a dot operator - used for known properties
console.log(student1.name, student1.surname, student1.age);
console.log(student2.name, student2.surname, student2.age);
console.log(student3.name, student3.surname, student3.age);
// -- using square brackets - used for dynamic usage of properties (advanced)
console.log(student1['name'], student1['surname'], student1['age']);
console.log(student2['name'], student2['surname'], student2['age']);
console.log(student3['name'], student3['surname'], student3['age']);

// Definining an array
let numberArray = [7, 8, 7, 5, 1, 2, -8, -9];
// indexes         0, 1, 2, 3, 4, 5,  6,  7
let students = [student1, student2, student3];
// indexes          0         1         2   

// Getting element count
let numberCount = numberArray.length; // count - 8
let studentCount = students.length; // count - 3

// Getting certain element
console.log(numberArray[0]); // first element
console.log(numberArray[4]); // fifth element
console.log(numberArray[7]); // eight element

console.log(students[0]); // first element
console.log(students[1]); // second element
console.log(students[studentCount - 1]); // last element

// Cycles
// -- While cycle - it is used when you can't define iteration count
// -- iteration is a execuded code in the cycle block
console.log('---- While cycle with random numbers ----');
let randomNumber = 0;
while (randomNumber < 10) {
  // This is while cycle block
  console.log(randomNumber);
  randomNumber = Math.floor(Math.random() * 12);
}
console.log({ randomNumber });
console.log('While cycle ended!');

// -- For cycle - it is used when you know or can count iteration count
console.log('For cycle - executing 10 times');
for (let i = 0; i < 10; i++) { // run code 10 times
  console.log('index:', i);
}

// ---- it is ofthen used to iterate through arrays, like so:
console.log('For cycle - iterating thought the array');
for (let i = 0; i < numberArray.length; i++) {
  console.log('index:', i, 'value:', numberArray[i]);
}
// Function - is a code declaration, which can be executed repeatedly
// Function declaration --------------------------------------------
//        ↓ - function name - by which it can be called later in the code
function add(a, b) {
  //            ↑ - function arguments
  return a + b; // ← return directive - it returns the result to the place where it was called
} // function declaration end --------------------------------------
//           ↓ a, b ↓ - function parameters
let sum1 = add(a, b);
console.log('Sum of', a, ' and', b, ' is:', sum1);
console.log('Sum of 10 and 12 is:', add(10, 12));
//                                     ↑ a,  b ↑- function parameters

// Tasks:
// 1. Create a function that multiplies 2 numbers
// 2. Create a function that multiplies 3 numbers
// !!! Bonus !!!
// 3. Create a function that multiplies all numbers in a number array
// 4. Create a function that finds largest number in an array
// 5. Create a function that would find and return age average of stundents from a student array
function multiply(a,b){
  let resultmul=0;
  resultmul=a*b;
  return resultmul;
}
console.log(multiply(3,5));

  function multiplyTriple(a,b,c)
{
  let resultmul=0;
  resultmul=a*b*c;
  return resultmul;
}

console.log(multiplyTriple(2,3,6));

function Arraymult(){
let numbers = [3, 5, 7, 9];
for(let i=0; i<numbers.length; i++) {

  numbers[i] = numbers[i] * 2;
  
}
return numbers;
}
console.log(Arraymult());

function Biggest(){
  let numbers = [5, 1 , 0 , 3 ,6];
 let big = 0;
  for (let i = 0; i < numbers.length+1; i++) {
    if (numbers[i]>big) {
      big=numbers[i];
    }
  }
  return big;
}
console.log(Biggest());

function rectangleArea (a,b){return a*b}
function cuboidVolume (a,b,c){return a*b*c}
function mulAllnumbers(numberArray){
  let result=1;
  for (let i  = 0; i  < NumberArray.length; i ++) {
    const number = array[i];
    result= result*number;
  }
  return result;
}

function StudentsAverage(studArray) {
  for (let i = 0; i < studArray.length; i++) {
    const student = studArray[i];
    average += studArray[i].age;
  }
  return ageTotal / studArray.length;
  return studArray
  .map(stud => stud.age)
  .reduce(res, stud) => res += stud/studArray.length);
  
}