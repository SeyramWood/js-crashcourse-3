
// let i = 10;

// do {
//   console.log(i)
//   i++
// } while (i < 10)

// while (i<10) {
//   console.log(i)
//   i++
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('Five');
//     break;
//   }
//   console.log(i)
// }

//function
function myself() {
  console.log(`My name is John Doe`);
}
//function with parameter
function mySelf(name) {
  console.log(`My name is ${name}`);
}

myself()
mySelf('John Doe')
mySelf('Jane Doe')
mySelf('Gifty Doe')

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}
add(5,6)
add(6,7)
add(7, 8)

function multiply(x, y) {
  let result = x * y;
  console.log(result);
}

multiply(5,6)
multiply(6,7)
multiply(7, 8)

//function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}
let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

//arrow function
let divide = (a, b) => a / b;
// let multiply = (a, b) => {
//   let result = a * b;
//   return result;
// }
// console.log(divide(10,5));
// console.log(multiply(10, 5));

//Higher function
//is a function that take a function as a parameter
let numbers = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10]
let squares = numbers.map((number) => number * number)
console.log(squares);
let doubles = numbers.map((number) => number + number)
console.log(doubles);
let evens = numbers.filter((number) => number % 2 === 0)
console.log(evens);
let odds = numbers.filter((number) => number % 2 !== 0)
console.log(odds);
let odds2 = numbers.filter((number) => number % 2 === 1)
console.log(odds2);
let five = numbers.find((num) => num === 5)
console.log(five);

//string
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat(' from concatenation'));
console.log(sentence.endsWith('dog'));
console.log(sentence.includes('hardworking'));
console.log(sentence.indexOf('brown'));
console.log(sentence.lastIndexOf('o'));
console.log(sentence.padStart(10));
console.log(sentence.padEnd(10));
console.log(sentence.repeat(2));
console.log(sentence.replace('lazy','hardworking'));
console.log(sentence.slice(20,30));
console.log(sentence.substring(20,30));
console.log(sentence.split(' '));
let email = 'kofia@email.com'
console.log(email.split('@'));
console.log(sentence.toLocaleUpperCase());
console.log(sentence.toLocaleLowerCase());