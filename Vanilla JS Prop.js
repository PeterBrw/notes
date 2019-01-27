// Java Scrip is coming to LIVE //

// 004 Section Intro 

// You can write js code in your HTML like this:

<script>
alert('Hello!');
</script>

// -but is not recommended, just if is just few lines of code like in this case.

<script src="app.js"></script>
// link-ul acesta il punem inainte de a inchide body-ul in HTML-ul nostru, iar codul js il scriem in app.js 


// 005 Using the Console

// single line comment

/* 
multi
line
comment
*/

// Log to console 

console.log('Hello World');
console.log(123);
console.log(true);   
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2}); - ne afiseaza in consola obiectul in forma de table

console.error('This is some error'); - iti pune in console eroarea si linia la care se gaseste

console.clear(); - curata consola 

console.warn('This is a warning'); 
// - iti pune un warning in consola, iar daca dai click pe el, iti arata exact unde se afla in code 

console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello'); 
//  - ne arata timpul de executie de la .time pana la .timeEnd a ceea ce se afla inauntru "functiei", daca vrei sa vezi cat timp ia ceva din scriptul tau


 // 006. var, let & const 


//  Poti sa redeclari o variabila cu var sau cu let 

 var name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

// letters, numbers, _. $
// Can not start with number

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara' // Underscore
var FirstName = 'Tom'; // Pascal case

// Most used case in programming for naming variables is camelCase.

// LET
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
// let is like var but in es6 we use let, we don't use var anymore

// CONST
const name = 'John';
console.log(name);
// Can not reassign
name = 'Sara';
// Have to assign a  value   
const greeting;


const person = {
  name: 'John',
  age: 30 
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);

// we ca change arrays an objects that are assign to const we cannot redeclare them using const


// 007 Data Types in JavaScript

// PRIMITIVE 
/* store directly in the location the variable access
stored on the stack 
string
number
boolean
null undefined
symbols (es6)
*/

// REFERENCE DATA TYPES
/* access by reference 
objects are stored on the heap
a pointer to a location in memory 

https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap

arrays
object literals
functions
dates
anything else

*/

// JavaScript is a dynamically typed language 

// PRIMITIVES

// String
const name = 'John Doe';

// Number
const age = 45;

// Boolean
const hasKids = true;

// null
const car = null;
// null is a oject 

// Undefined
let test;

// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects

// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}

const today = new Date();

console.log(today);  
console.log(typeof today);

typeof // we used it to see what kind of data we have




// 008 TYPE CONVERSION 


// length is working just on strings because is a string property


let val;

// Number to string
val = String(555);
val = String( 4+4);
// bool to string
val = String(true);
// Date to string
val = String(new Date());
//  Array to string
val = String([1,2,3,4]); // ne transforma array-ul in string, dar fara parantezele patrate doar caracterele cu virgule

// toString()
val = (5).toString();
val = (true).toString();

// Strings to numbers
val = Number('5');
// bool to number
val = Number(true); // ne da numarul 1
val = Number(false); // ne da numarul 0
val = Number(null); // ne da numarul 0
val =  Number('hello'); // ne va da NaN which stands for Not a Number
val = Number([1,2,3]); // ne va da NaN


val = parseInt('100'); // imi transforma stringul in numar
val = parseInt('100.30'); // imi transforma stringul in numar, dar fara zecimale

// daca vrem sa avem si zecimale atunci cand transformam folosim parseFloat
val = parseFloat('100.31'); // ne transforma string-ul in numar si ni-l da cu zecimale  

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

//toFixed() This method formats a number with a specific number of digits to the right of the decimal. if you wanna get more decimals even if the decimals are 0s you have to use .toFixed(n); and will get n decimals

// length is working just on strings because is a string property


const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum); 

const val3 = String(5);
const val4 = 6;
const sum1 = val3 + val4;
console.log(sum1); // we eill get 56
console.log(typeof sum1); // it will be string

// if we have string + number it will be equal to string this is a type coercion https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839


// 009 NUMBERS THE MATH OBJECT

const num1 = 100;
const num2 = 50;
let val; 

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // aproximeaza prin lipsa daca ce e dupa virgula e mai mic decat 5 si prin adaos daca e mai mare sau egal cu 5
val = Math.ceil(2.4); // aproximare prin adaos 
val = Math.floor(2.8); // aproximare prin lipsa
val = Math.sqrt(64); // radical din ceva
val = Math.abs(-3); // absolute sau modul
val = Math.pow(8, 2); // ridicarea la putere
val = Math.min(2,1,4,1,55,6,-3); // minimul dintre numerele din paranteza
val = Math.max(2,1,4,1,55,6,-3); // returneaza maximul dintre numerele din paranteza
val = Math.random(); // it gives us a random decimal(pana-n 1)

val = Math.floor(Math.random() * 20) ; // ne returneaza un numar random obtinul prin aproximarea prin adaos si inmultire 

console.log(val);


// 010 STRINGS  METHODS AND CONCATENATION

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val = ' Traversy'; // this it will overwrite

val = 'Brad ';
val += ' Traversy'; // but this it will append

val = 'Hello, my name is ' + firstName + ' and I am  ' + age; // this is how concatenation works in ES6 they introduce templete literals

// Escaping 
val = 'That\'s awesome, I can\'t wait'; // to have a single quote inside a string you have to use backslash before it and this will be alright

// Length
val = firstName.length; // it gives us the number of characters of firstName string 

// concat
val = firstName.concat(' ', lastName); // it concatenates at firstName string the lastName string with space between them

// Change case
val = firstName.toUpperCase(); // change all the characters of the string in uppercase
val = firstName.toLowerCase(); // change all the characters of the string in lowercase 

val = firstName[0]; // it gives us the first character(in this case) of the string

// indexOf()
val = firstName.indexOf('l'); // it returns index of the first character that is like that one from parenthesis
val = firstName.lastIndexOf('l'); // it returns index of the last character that is like that one from parenthesis

// charAt()
val = firstName.charAt('2'); // it gives us the character from the index 2(in this case)
// Get last char
val = firstName.charAt(firstName.length - 1); // it gives us the last character of the string

// substring()
val = firstName.substring(0, 4); // it gives us the the charactes from index 0 to index without the 4 one

// slice()
val = firstName.slice(0, 4); // it gives us the same result as .substring() method 
val = firstName.slice(-3); // it will give us the last 3 characters from the string

// split()
val = str.split(' '); // it return us an array with elements from str string and at the every index of the array you can find the characters from str that were separating with space(in this case) like first word at the 0 index and so on
val = tags.split(','); // here the separetor where split is comiming is ','

// replace()
val = str.replace('Brad', 'Jack'); // it replace the Brad from string str with Jack

// include()
val = str.includes('Hello'); // this is returning true or false, if there is something or not in the string




console.log(val);



// 011 TEMPLATES LITERALS

const name = 'John';
const age = 30;
const job = 'Web Development';
const city = 'Miami';
let html;

// Witout template strings ES5
html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age +'</li><li>Job: ' + job  +'</li><li>City: ' + city +'</li><ul>';

html = '<ul>' + 
          '<li>Name: ' + name + '</li>' +
          '<li>Age: ' + age + '</li>' +
          '<li>Job: ' + job + '</li>' +
          '<li>City: ' + city + '</li>' +
        '</ul>';  
// old ways of doing things

function hello(){
  return 'hello';
}

// With templates strings/Templates literals ES6
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
        

document.body.innerHTML = html;


// 012 ARRAYS ARRAYS METHODS

// Create some arrays
const numbers = [43,56,33,23,44,36,5];  
const numbers2 = new Array(22,45,33,76,54);
// ways to creata arrays
const fruit = ['Apple', 'Banana', 'Orange', "Pear"];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]; // we can have all data types in an array

let val;

// Get array length
val = numbers.length; 
// Check is is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3]; // gives us the value from index 3 of numbers
// arrays are 0 based, starts at index with 0
// Insert into array
numbers[2] = 100; // put value 100 at index 2
// Find inde of value
val = numbers.indexOf(36); // it gives us the index of value 36

// MUTATING ARRAYS
// Add on to end
numbers.push(250); // add at the end of the array value 250
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,1); // it deletes the values of the array starting with the value from index on in this case, and just one in this case
// Reverse
numbers.reverse(); 

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays  
val = fruit.sort(); // sort array fruit in alphabetichal order
val = numbers.sort();  // sort the number after the first character of the number, which is not good

// Use the "compare function"
val = numbers.sort(function(x,y){
  return x-y;
}); // sort the numbers from arrays in increse order

// Reverse sort
val = numbers.sort(function(x,y){
  return y-x;
}); // sort the numbers from array in decrease order

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50); // returns the first number under50 from array numbers

function over50(num){
  return num > 50;
}

val = numbers.find(over50); // returns the first number over50 from array numbers
 


console.log(numbers);
console.log(val);


// 013 OBJECTS LITERALS


const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 1987;
  }
}

let val;

val = person; // attach person object to variable val
// Get specific value
val = person.firstName; // gives the value of key firstName
val = person['lastName']; // same as the other one above
val = person.age;
val = person.hobbies; // gives us the array of hobbies from person object
val = person.hobbies[1]; // gives us the value from index 1 of hobbies array from object person
val = person.address; // will print the address object from person object
val = person.address.state; 
val = person.address['city'];
val = person.getBirthYear(); // gives us the return from function that is value of getBirthYear, we need parenthesis because we call a function

const person1 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}
// we use this.something when we want to use a property of that object in a function of that object (somehow!?)



console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}


// 014 DATES TIMES

let val

const today = new Date();
// it will give to today, today's day
//typeof today it will be object
let birthday = new Date('9-10-1981'); // it will give to birthday the date of 10 September 1981 with 00:00 hour

 birthday = new Date('9-10-1981 11:25:00'); // give the birthay the date of 10 September 1981 with hour 11:25

 birthday = new Date('September 10 1981');

 birthday = new Date('9/10/1981');



val = today.getMonth(); // it will give us the number of month, but the number month is 0 based, that means the January will be 0 and December will be 11

val = today.getDate(); // it will give us the day of the date

val = today.getDay(); // it will gives us the number of week day, Monday - 1 and Sunday - 7

val = today.getFullYear(); // it will give us the year

val = today.getHours(); // it will give us the hour

val = today.getMinutes(); // it will give us the minutes

val = today.getSeconds(); // it will give us the seconds

val = today.getMilliseconds();  // it will give us the milliseconds

val = today.getTime(); // it give us the time stamp, the amount of time in seconds the past since January 1 1970 


birthday.setMonth(2); // it will set the month of birthday to March(0 based)

birthday.setDate(12); // it will set the date of birthday to 12

birthday.setFullYear(1985); // it will set the year of birthday to 1985

birthday.setHours(3); // it will set the hours of birthday to 3 o'clock

birthday.setMinutes(30); // it will set the minutes of birthday to 30

birthday.setSeconds(25); // it will set the seconds of birthday to 25



console.log(birthday); 



// 015 IF STATEMENTS COMPARISON OPERATORS 



// if(something){
//   do something
// } else {
//   do something else
// }  if syntax 

let id = 100;

// EQUAL TO
if(id == 100) {
   console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO 
if(id != 100) {
  console.log('CORRECT');
} else {
 console.log('INCORRECT');
}

// == in this way we just testing the value, we not testing the type so if id = '100' (string) and we will do if(id == 100) it will return us CORRECT in our case because this is testing value, not type value, usually you don't to do like this, most time you want to test the value and the type for which you'll gonna use ===


// EQUAL TO VALUE AND TYPE
id = '100';

if(id === 100) {
  console.log('CORRECT');
} else {
 console.log('INCORRECT');
} // will return INCORRECT because id is a string and 100 is a number, to avoid issues is better to use === most of the time


// NOT EQUAL TO VALUE AND TYPE
id = '100';

if(id !== 100) {
  console.log('CORRECT');
} else {
 console.log('INCORRECT');
}

id = 100;

// // Test if undefined
// if(typeof id !=='undefined'){
//   console.log(`The ID is ${id}`;
// } else {
//   console.log('NO ID');
// } 
// if there is no ID(we don't dec;are the ID) they will return NO ID
// if you wanna is somethin is not there at all you should use something like example above typeof

id = '100';


// GREATER OR LESS THAN SANE AS LESS THAN
if(id >= 100) {
  console.log('ESTE');
} else {
 console.log('NU ESTE');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue'); 
} else {
  console.log('Color is not red or blue');
}


// LOGICAL OPERATORS

const name = 'Steve';
const age = 25;;

// AND &&
if (age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else{
  console.log(`${name} is a adult `);
}

// OR ||

if(age < 16 || age > 64){
  console.log(`${name} can not tun in race`);
} else {
  console.log(`${name} is registred for the race`)
}


// TERNERY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');




// SWITCHES


const color = 'afds';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break; 
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;  
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);




// 017 FUNCTION DECLARATION EXPRESSION

// FUNCTION DECLARATION

function greet(){
  //console.log('Hello');
  return 'Hello';
}

greet(); // in this way you're calling the function greet

console.log(greet()); // i this way we console the function when we are calling it, and it gives us what is at return

function greet(firstName, lastName){
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));
// firstName and lastName are parameters of the function and you can have how many parameters we want


function greet(firstName, lastName){
  if(typeof firstName === 'undefined'){firstName = 'John'}
  if(typeof lastName === 'undefined'){lastName = 'Doe'}
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());
// in this way we are set the parameters value by default even if we didn't set the parameters when we called the funcion there will be default parameters

function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());
// This is the ES6 Mode to set default parameters in a function

// FUNCTION EXPRESSIONS
//  is actually a fuction assigned to a variable

let square = function(x){
  return x * x;
};

console.log(square(8)); 
// usually function expression are  anonymous function

square = function(x = 3){
  return x * x;
}; // we can do the same with the parameters like in function declaration to set a default of them like above


// IMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
// when a functon is put inside an obeject is called a METHOD

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo..');
} // function or method outside the object

todo.add();
todo.edit(22);
todo.delete();


// 018 GENERAL LOOP

// FOR LOOP

for(let i = 0; i <= 10; i++){
  if(i === 2){
    console.log('2 is my farite number');
    continue; // in this case continue is going to the next i without doing what is under it(under continue) or go to the next iteration
  }

  if(i === 5){
    console.log('Stop the loop');
    break; // in this case break will break the loop and will not do anything else
  }
  console.log('Number ' + i);
} 
// you should use for loop when you know how many times it will run and you will us loop when you don't know how many times it will run(it's not always black and white)

// WHILE LOOP
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;  
}

// DO WHILE LOOP

// it will run at least once no matter what

/* let */ i = 1;

do {
  console.log('Number ' + i);
  i++;
}

while(i < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}


//FOREACH
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
}); // loop through an array is much more easier to use forEach loop // here the parameter is like an i from a for loop but like a array[i] as well // first parameter from forEach loop function is the value of each index, the second parameter is the index itself and the third parameter is the actual array


//MAP 
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}


for(let x in user){
  console.log(x);
} // in this case x it will give us the keys(the index) of the object

for(let x in user){
  console.log(`${x} : ${user[x]}`);
} // this will give us the keys and the value of the object




// 019 A LOOK AT THE WINDOW


// Document object is part of the window object 
// The window is the global object in client side JavaScript, is the global environment, Google Chrome use V8 Engine for JS

// type window in console and you'll see all of it's parts

// WINDOW  METHODS / OBJECTS / PROPERTIES

window.console.log(123);

// console.log for example is part of the window

// Alert
// a little box that popup with alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);
console.log(input);

// Confirm
// usually it is used when you delete something

if(confirm('Are you sure?')){
  console.log('Yes');
} else {
  console.log('No');
}



let val;

// Outter height and width
val = window.outerHeight; // it gives you the height of "window"/browser if you'll resize it, it will change

val = window.outerWidth; // it gives you the width of "window"/browser if you rezise the browser, the width will change


// Inner height and width

val = window.innerHeight; // it gives you the inner height of browser, without the "footer"(let's say) and navigation(bar where you enter the URL)

val = window.innerWidth; // it gives you the inner width of the browser, withou the scroll bar

// Sroll  points
val = window.scrollY; // it shows you where you are with scroll(bar I guess) on the vertical axis or Y axis

val = window.scrollX; // it show you where you are with scroll on horizontal axis or X axis 

// these are good for sites where you have the animations happen as you scrolling  down in this way you know at what point you are(when to shows the animations)


// Location Object
val = window.location; // this gives us a lot of information like host, hostname, port, protocol, etc.
val = window.location.hostname; // it gives us the hostname
val = window.location.port;
val = window.location.protocol;
val = window.location.href; 
val = window.location.search; // it gives you the search parameters(for exapmle a form submit) 019 12:30

// Redirect
// window.location.href = 'http://google.com'; // it takes you to the URL from href, you can redirect it outsite of your site, but usually it's used to take you inside of you site

// // Reload 
// window.location.reload(); // it's just reloading the page

// History object
//window.history.go(-1); // it take us to the sites before, -1 it take us to the site before and so on -2.. 
val = window.history.length; // it gives us the length of history, we see how many sites we acces before

// Navigator Object 
// it has to do with browser itself Chomoe, Firefox and so on
val = window.navigator;
val = window.navigator.appName; // it give us Netscape 
val = window.navigator.appVersion; // it gives you the browser version and so on
val = window.navigator.userAgent; // it almost the same as window.navigator.appVersion
val = window.navigator.platform; // it gives you the operating system win32, linux x86_64 etc.
val = window.navigator.vendor; // vendor = furnizor
val = window.navigator.language;// it gives you the language of browser 

console.log(val);



// 020  BLOCK SCOPE WITH LET CONST

// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();
// we will have  different output for function scope and global scope because the global scope does not overwrite the function scope or viceversa even if we use var to declare a variable, even that variables are declared the same they are different because they are declared in not the same scope

// Block level scope 
if(true){
  var a = 7;
  let b = 5;
  const c = 6;
  console.log('Block Scope: ', a, b, c);
} // in this case var from block scope will overwrite var from global scope
 
// every if, for, while, do while, switch in witch we declare something, that variables that we declare inside of them are declared in the block scope

// every variable which is declared in a function in declared in the function scope

console.log('Global Scope: ', a, b, c);




// 021 WHAT IS THE DOM

// Document Object Model is a structure representation of an HTML document, tree of nodes or elements created by the browser

// we can use JS to manipulate the DOM elements or nodes

// DOM is object oriented that means that each node has its own set of properties and methods that we can change, add, remove and so on  

// the browser give us a window object and inside of that we have document object(represent the loaded document or the webpage) see diagram of DOM tree




// 022 EXAMINING THE DOCUMENT OBJECT


let val;

val = document; // give us the entire body

// when we work with DOM we can all kinds of structures like HTML collection(which is kind of array and kind of not, is format like an array with brackets, comma separated values, but you can use forEach loop), node list as well (which is also like an array but you can't forEach loops on them)

val = document.all; // it gives you an HTML collection from entire document 
val = document.all[0]; // like on arrays this gives us the first element from the HTML collection, you can access values from indexes collection like on an array
// we can do properties as well
val = document.all.length; //  this will give us number of the DOM elements or number elements of HTML collection 
val = document.head; // in this way we can access the head
val = document.body; // in this way we can access the body 
val = document.doctype;
val = document.domain; // it will give us the domain 
val = document.URL; // this will give us everything including the protocol
val = document.characterSet; // this give us the character set
val = document.contentType; // this will give us the content type, in this case text/html


// we can select stuff without using selectors, it's not recomanded but it's possible

val = document.forms; // we will get all the forms in the HTML collection
val = document.forms[0]; // this is giving the first form
val = document.forms[0].id; // it give us the id of the first form
val = document.forms[0].action; // give us the action of the first form


val = document.links; // it gives us an HTML collection with the links from the webpage

val = document.links[0]; // this is give us the first link in from the page
val = document.links[0].className;
val = document.links[0].classList; // this will give us a DOMTokenList with the classes from that link
val = document.links[0].classList[0]; // this give us the first class from that link

val = document.images; // it will give us an empty HTML collection
val = document.scripts; // it will give us the scripts from the webpage in a HTML collection 
val = document.scripts[2].getAttribute('src'); // it will give us the value from attribute src in the third link

// You can turn an HTML collection into an array 

let scripts = document.scripts; 

let scriptsArr = Array.from(scripts); // transform the HTML collection scripts into an array called scriptsArr

scriptsArr.forEach(function(script){
  console.log(script);
} )


console.log(val);




// 023 DOM SELECTORS FOR SINGLE ELEMENTS

// Single element selector will allow you to grab one element by its id or its class, etc. and only store one thing
// if you use single element selector with a class that appears more then once in the DOM it's just gonna grab the first one, multiple elements selector will grab all the elements with that class and will return an HTML collection or a node list depending on which selector you use 

// document.getElementByID()

console.log(document.getElementById('task-title')); // it will console log the element with task-title id 

// Get things from the element
console.log(document.getElementById('task-title').id);

console.log(document.getElementById('task-title').className); // will give us the class from the element with that id

// Change styling
document.getElementById('task-title').style.background = '#333'; // change the background style of the element with that id 
document.getElementById('task-title').style.color = '#fff'; // change the color style of the element with that id
document.getElementById('task-title').style.padding = '5px'; // change the padding style of the element with that id
// document.getElementById('task-title').style.display = 'none'; // the elemenet with that id will disappear usually you do this when implementing some events, hovering over something and you want something else to show(for dinamic functionality)

// Change content
document.getElementById('task-title').textContent = 'Task List'; // it will change the text content of the element with that id
document.getElementById('task-title').innerText = 'My Tasks'; // same as the other one above
document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>'; // it will insert HTML in our target element

const taskTitle = document.getElementById('task-title'); // we assign our element to a constant so it will be easier to work with it as below(see the difference with what is above)


taskTitle.textContent = 'Task List'; // it will change the text content of the element with that id
taskTitle.innerText = 'My Tasks'; // same as the other one above
taskTitle.innerHTML = '<span style="color: red">Task List</span>'; // it will insert HTML in our target element


// document.querySelector()
// we don't have to select elements by ID, we can select them by anything (basicly works like jQuery, you can put any CSS selector in here)
console.log(document.querySelector('#task-title')); // it will return us in the console the element with that id
console.log(document.querySelector('.card-title'));// it will return us in the console the element with that class
console.log(document.querySelector('h5')); // it will give us the h5 element, but if there are more than one, it will give us the first one from the HTML page


document.querySelector('li').style.color = 'red'; // will change the color to red of the first li in this case(not to all the li elements)

document.querySelector('ul li').style.color = 'blue'; // also this will change the color just to the first li from ul

document.querySelector('li:last-child').style.color = 'red'; //  we can use CSS and in this way we can target what we want, in this case we target the last li and make it red (in this case)

document.querySelector('li:nth-child(3)').style.color = 'yellow'; // in this way we target the third child and make it yellow, so we can target anything
document.querySelector('li:nth-child(4)').textContent  = 'Hello World'; // we changed the content text to the element we target with CSS pseudo-classes
document.querySelector('li:nth-child(odd)').style.background  = '#ccc'; // in this case when we use pseudo-classes odd or even, just the first element it will be affected 
document.querySelector('li:nth-child(even)').style.background  = '#f4f4f4' // same as the other one above but with even
// we can use querySelectorAll we can use odd and even to match all the element which are odd or even 


// 024 DOM SELECTORS FOR MULTIPLE ELEMENTS


// Selectors that are used to select more than one element an they retun either an HTML collection or node list(both are similar to arrays, but we cannot to certain this like a regular array but they can be converted to arrays easy)

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item'); // it will return an HTML collection with all the elements that have colection item class and inside of it we can see  lot of properties about that element(like innerText and so on)
console.log(items); 

console.log(items[0]);// it give us the first element of the HTML collection that match all the elements with 'colection-item' class

items[0].style.color = 'red'; // it will style the first element of that HTML collection with color red
items[3].textContent = 'Hello'; // it will change the text content of the element from the index 3 of that HTML collection (the 4th element )

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // we also we can use getElementByClassName in this way, we don't have to use it just in global scope

console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName ('li'); // assign all the li's to lis variable, in this case we get the elements by document.getElementsByTagName which is similar to document.getElementsByClassName
console.log(lis);
console.log(lis[0]); // this will consolo.log the first element of the lis HTML collection
lis[0].style.color = 'red';
lis[3].textContent = 'Hello World';


// an HTML collection is not an array 

// Convert HTML Collection into array
lis = Array.from(lis); // convert the old lis which is an HTML Collection into an array  

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className); // we can do forEach because lis now is an array, in this case will console.log the className of each element
  li.textContent = 'Hello'; // it will change the content of each li into 'Hello'
  li.textContent =`${index}: Hello World`;
}); 

console.log(lis)

//  NodeList counts not just elements but thing like text nodex, it's allows us to do thins like forEach and some other array methods without having to convert it 

// document.querySelectorAll 
// all the time document.querySelectorAll wiil return us a node list

const items = document.querySelectorAll('ul.collection li.collection-item'); // this will assign the ul with the li's to the items which will gonna be a NodeList

// we don't have to convert the NodeList into to array, that means that we can do forEach loop on it

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`; 
});

const liOdd = document.querySelectorAll('li:nth-child(odd)'); // it will assign to liOdd all the odd li's
const liEven = document.querySelectorAll('li:nth-child(even)'); // it will assig to liEven all the even li's

liOdd.forEach(function(li, index){
  li.style.background = '#ccc'; 
}); // it will change the color to #ccc(grey) to all the odd li's(in this case)

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
} // it will change the background color of the even li's(in this case) to a ligher grey(#f4f4f4)

// we can use forEach loop or for loop to go through a NodeList

// The of for loop will work even with the HTML Collection if you don't convertet it into an array (cause you can use length on it)


console.log(items);

// 025 TRAVERSING THE DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); // this will select just the first element of the list from that unorder list  


val = listItem;
val = list;

// Get child nodes
val = list.childNodes; // it will give us a NodeList with all the child nodes (not only the elements, but even the text nodes which are actually the line breaks(which are the spaces between element from a line to another if we'll write the elements on a single line we'll have just the elements on that NodeList) or something like that)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
// we can check the node type 
val = list.childNodes[0].nodeType; // in this case it will return 3 (which is a text node)

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Commnet
// 9 - Document itself
// 10 - Doctype


// usually we don't care about text nodes, just about the child nodes and for that we have .children (as below) which will give us a HTMLCollection

// Get children element nodes
val = list.children; // it will return an HTMLCOllection with children of that list(and there is not text, it's just the elements)
val = list.children[0]; // it will give us the first child of that HTMLCollection
val = list.children[1].textContent = 'Hello'; // it will change the text of the second element from that HTMLCollection

// Children of children
val = list.children[3].children; // it give us the children of the 4th element from that HTMLCollection as also an HTMLCollectiom
val = list.children[3].children[0]; // it gives the first element of the HTMLCollection which we get it from the line of code above this line
 
list.children[3].children[0].id = 'test-link'; // assign to that element the id 'test-link' 


// First Child
val = list.firstChild; // it's give us the first child of that list which is an HTMLCollection
val = list.firstElementChild; // it will give the firstElementChild of that list which is an HTMLCollection

// Last Child 
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount; // it will give us the number of the children element from that list which is an HTMLCollection

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement; // in most cases the result of the lines above will gonna be the same

val = list.parentElement.parentElement;


// Get sibling 
val = listItem.nextSibling; // it will give us the next sibling ( and in this case will gonna be a text node)
val = listItem.nextElementSibling; // it will give us the next sibling element (which will be the next list item in this case )
val = listItem.nextElementSibling.nextElementSibling; // it will return us the next, next element sibling (which will be the 3rd element from the unoreder list in this case)

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

// 026 CREATING ELEMENTS

// Create element
const li = document.createElement('li'); // create an li element

// Add class 
li.className = 'collection-item';  // add the class 'collection-item' to the li that we created

// Add id
li.id = 'new-item'; // add the id 'new-item' to the li that we created

// we can construct DOM elements from scratch with Vanilla JavaScript

// Add attribute
li.setAttribute('title', 'New Item'); // add the attribute 'title' with value 'New Item' to the li that we created

// Create text node and append
li.appendChild(document.createTextNode('Hello World')) // appendChild means that you want to put something inside of something, document.createTextNode('Hello World') it creates a text node with 'Hello World'

// let hello = document.createTextNode('I will come');
// li.appendChild(hello);

// Create new link element
const link = document.createElement('a');
// Add classes 
link.className = 'delete-item secondary-content';
//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li); // append the li that we created to the ul.collection


 

console.log(li);



// 027 REMOVING REPLACING ELEMENTS 


// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading or the heading we want to replace
const oldHeading = document.getElementById('task-title');
// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading); // replace the child oldHeading of the cardAction with the newHeading(in this case)

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul'); 

// Remove list item
lis[0].remove(); // it will remove the first element of ul

// Remove child element
list.removeChild(lis[3]); // it will remove the 4th element of the ul 

// CLASS & ATTR
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // it will give us a string of the classes
val = link.classList; // it will gives us a DOMTokenList with the classess
val = link.classList[0]; // it will give us the first element(class) of the DOMTolkenList
link.classList.add('test'); // it will give add the class 'test' to the other classes
link.classList.remove('test') // it will remove the class 'test' from the classes(if there are, I guess)
val = link;

// Attributes
val = link.getAttribute('href'); // it give us the value of attribute 'href'
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // give us true or false, in this way we check if there is an attribute href (in this case)
link.setAttribute('title', 'Google'); // set a new attribute 'title' with value 'Google' (in this case)
link.removeAttribute('title'); // remove attribute 'title' from link element (in this case)






console.log(val);


//console.log(newHeading);



// 028 EVENT LISTENERS THE EVENT OBJECT 

So can listen on events any element in the DOM  
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');

  e.preventDefault();
}); // when you click on that element that 'selected' the console will log 'Hello World', actually this is an event listener, the e is the event object that prevent the function from it's default behavior, but if we have #(hash) at the anchor, the event will gonna be ok and will do what is inside the function

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log('Clicked');
  e.preventDefault();
} // having a named function is a much needer than an anonnymous function


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

  let val;

  val = e; // it will return an MouseEvent which has lots of properties

  // Event target element
  val = e.target; // it give us the element which was target
  val = e.target.id; 
  val = e.target.className; // give us the classes of the target element
  val = e.target.classList;
  e.target.innerText = 'Hello';// change the text of the button in 'Hello' when we click it

  // you can do what you want when an event fires off

  // Event type
  val = e.type; // when you click it it will give us the type of the event, in this case 'click'

  // Timestamp
  val =  e.timeStamp;

  // Coords event relative to the window
  val = e.clientY; // it give us a number which are number of pixels from the top to the element which was target(Y axis)
  val = e.clientX; // this is the X axis as the other one above with one line

   // Coords event relative to the element
   val = e.offsetY; // this is the pixels where you click inside of that element
   val = e.offsetX;


  console.log(val);
}

// 029 MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click', runEvent); // when we click the runEvent will be trigger

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent); // when we double click, the runEvent it will be trigger

// Mousedown 
clearBtn.addEventListener('mousedown', runEvent); // it fires the runEvent when we click and hold the click

// Mouseup
clearBtn.addEventListener('mouseup', runEvent); // it fires the runEvent after we realease the mouse hold click

// Mouseenter
card.addEventListener('mouseenter', runEvent); // it will fires the runEvent when we enter the cursor in the card

// Mouseleave
clearBtn.addEventListener('mouseleave', runEvent); // it will fires the runEvent when we come out the card with the cursor

// Watch tomorrow again from 5:32

// Mouseover
card.addEventListener('mouseover', runEvent); // it fires when you hover over the element and will fires again the runEvent even we go inside and element from the main element with cursor
 
// Mouseout
card.addEventListener('mouseout', runEvent); //it fires the runEven when we go with the cursor over an element inside the main element
 
// Mousemove
card.addEventListener('mousemove', runEvent); // fires the runEvent on every move with the mouse inside that element(card in our case)

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX ${e.offsetX} MouseY: ${e.offsetY}`; // it will display on heading the coords of mouse 
  
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40 `; // change the background after the mouse coords
}

// 30 KEYBOARD INPUT EVENTS


const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Keep an input form or search
 taskInput.value = `${taskInput.value}`; // I guess

// Clear input form
taskInput.value = '';

// Submit
form.addEventListener('submit', runEvent);
 // it will fires the runEvent when we ckick the button submit from that form

// Keydown
taskInput.addEventListener('keydown', runEvent); // the event runEvent it fires off when any key is it press

// Keyup 
taskInput.addEventListener('keyup', runEvent); // it will fires the runEvent after you release the key, any key

// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus
taskInput.addEventListener('focus', runEvent); // the runEvent it will be fires off when you focus with cursur of course

// Blur
taskInput.addEventListener('blur', runEvent); // it fires off the event runEven after you  focus click,  on input and click outside the input, then it will fires off 

// Cut
taskInput.addEventListener('cut', runEvent); // it will fires off the event runEvent when we cut what we write in the input with right-click or Crrl + X

// Paste
taskInput.addEventListener('paste', runEvent); // it will fires the event runEvent when you paste something in the input or Ctrl + V

// Input
taskInput.addEventListener('input', runEvent); // it will fires off the event runEvent at any kind of input

// Change
select.addEventListener('change', runEvent); // it will run the event runEvent when we change options from select

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

   console.log(e.target.value);

  heading.innerText = e.target.value; // will dispay in the heading what we are writing in the input

   // Get input value
   console.log(taskInput.value);

   e.preventDefault(); // prevent the event to do it's defaul behaviour
  
}


// 031 EVENT BUBBLING DELEGATION


// EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
}); // it will fires off the event when you click on the ".card-title" in this case

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});

when we click on '.card-title' which is "Task List" in HTML all the others event it will fires off because are parents of the '.card-title' in this is case, this is EVENT BUBBLING, it will fires all the parents events even if don't click them 

EVENT DELEGATION 

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deteleItem);

function deteleItem(){
  console.log('delete item');
} // it fires off the event just for the first Delete Button, not for all of them, see the HTML page and in this case we have to use EVENT DELEGATION, also we need to use EVENT DELEGATION if we insert something dinamically with JavaScript in the DOM, for example if something wasn't there when you load the page, and you created in the DOM with JS you'll have to use EVENT DELAGATION for that one

document.body.addEventListener('click', deleteItem); // if we click anywhere in the body the event will fires off (in this awesome case)

 function deleteItem(e){
   console.log('delete item');
   console.log(e.target);
 } 


 document.body.addEventListener('click', deleteItem);

 function deleteItem(e){
   if(e.target.className === 'fa fa-remove'){
    console.log('delete item');
   }
 }  // this is working, but is not what we want cause in this case we have to deal with the <i> tag from font-awesome and we want to deal with the anchor tag, see HTML page

 document.body.addEventListener('click', deleteItem);

 function deleteItem(e){
   if(e.target.parentElement.className === 'delete-item'){
    console.log('delete item');
   }
 }  // this will not work because if we look at the <a> class we can see more than one class, and our 'thing' is looking for the entire string of the classes   

 document.body.addEventListener('click', deleteItem); 

 function deleteItem(e){
   if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log('delete item');
   }
 } // now this is working but in case one of our elements that we target has more classes for example or just one more it will not work for that one and we don't want this to happen to us 

 document.body.addEventListener('click', deleteItem); 

 function deleteItem(e){
   if(e.target.parentElement.classList.contains('delete-item')) { // this will work how we want it event at the last <a> we have more classes, it's works cause we used 'e.target.parentElement.classList.contains' and this is the best way to target one of this links
    console.log('delete item');
    e.target.parentElement.parentElement.remove(); // this will delete the li element with everything inside of it 
   }
 } 



 //  032 LOCAL STORAGE

 // local storage is part of the window object, and has lots of properties and you can use these with values, and these values has to be 'strings'


// set local storage item 
// it will store data till will clear it out, but session storage will go away once your browser is close

localStorage.setItem('name', 'John'); // we set an item with key 'name' and value 'John' on the local storage

// set session storage item 
sessionStorage.setItem('name', 'Beth'); // we set an item with key 'name' and value 'Beth' on the session storage

// the difference between local storage and session storage is that once we close the browser data from session storage is gone, but data from local storage is still there 

// remove from storage
localStorage.removeItem('name'); // will remove the item with key 'name' from local storage

// get from storage
const name = localStorage.getItem('name'); // we assign to constant name, the value of key 'name' from local storage
console.log(name);


localStorage.setItem('age', '30');
const age = localStorage.getItem('age');
console.log(name, age); 


// clear local storage
localStorage.clear(); // we just clear the local storage


document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value; // we assign to const task the value input of the form
  localStorage.setItem('task', task); // we saved in the local storage the key 'task' and the value from constant task (as you can see)
  alert('Task saved');
  e.preventDefault();
}); // the problem with this is if we input something else in the form the data from local storage it will be replaced so we can store one task at the time 


document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value; // we assign to const task the value input of the form

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = []; 
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('task', JSON.stringify(tasks); // we saved in the local storage the key 'task' and the value from constant task (as you can see)
  alert('Task saved');
  e.preventDefault();
});

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value; // assign the value from input to constant task

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = []; // if we don't have anything in local storage we create an array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); // if we have something in local storage we took what we have an put them in our array
  }

  tasks.push(task); // we push out input to the array

  localStorage.setItem('tasks', JSON.stringify(tasks)); // we store our array to local storage

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});



// DOM PROJECTS


// 033 TASK LIST PART 1 - UI ADD TASK ITEMS


// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link);

  
  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  
  console.log(li);


  e.preventDefault();
}


// 034 TASK LIST PART 2 - DELETE FILTER TASKS


// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link);

  
  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  
  console.log(li);


  e.preventDefault();
}


// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
    e.target.parentElement.
    parentElement.remove();
    }    
  } 
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';


  // https://jsperf.com/innerhtml-vs-removechild

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


// 035 TASK LIST PART 3 - PERSIST TO LOCAL STORAGE 

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks); // DOMContentLoaded is a event that is called right after the DOM is loaded
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

  // Clear from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


// 036 CALCULATOR PART 1 - BUILD THE UI





// 039 NUMBER GUESSER PART 1 - BUILD THE UI




// 040 NUMBER GUESSER PART 2 - VALIDATION WINNING CASE



// In the console if we have a value, let's say that we have a number, if is blue, then is an integer, but if is black, that means that is string


/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess)  || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

  } else {

  }
});

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}





let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
// we can declare variables like above


if(isNaN(guess)  || guess < min || guess > max) // isNaN(guess), in this case we check if guess is not a number and we have to do it like this




// 041 NUMBER GUESSER PART 3 - LOSE CASE GAME OVER 


/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}





/* 042 NUMBER GUESSER PART 4 - PLAY AGAIN */

  /*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
if(e.target.className === 'play-again'){
window.location.reload();
}
});

// Listen for guess
guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value);

// Validate
if(isNaN(guess) || guess < min || guess > max){
setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}

// Check if won
if(guess === winningNum){
// Game over - won
gameOver(true, `${winningNum} is correct, YOU WIN!`);

} else {
// Wrong number
guessesLeft -= 1;

if(guessesLeft === 0){
  // Game over - lost
  gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
} else {
  // Game continues - answer wrong

  // Change border color
  guessInput.style.borderColor = 'red';

  // Clear Input
  guessInput.value = '';

  // Tell user its the wrong number
  setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
}
}
});

// Game over
function gameOver(won, msg){
let color;
won === true ? color = 'green' : color = 'red';

// Disable input
guessInput.disabled = true;
// Change border color
guessInput.style.borderColor = color;
// Set text color
message.style.color = color;
// Set message
setMessage(msg);

// Play Again?
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
return Math.floor(Math.random() * (max-min+1)+min);
}

// Set message
function setMessage(msg, color){
message.style.color = color;
message.textContent = msg;
}




/* 043 CONSTRUCORS THE this KEYWORD */


const brad = {
  name: 'Brad',
  age: 30
}

console.log(brad);

console.log(brad.age); 

/* An object it's OK if you're working just with one of it or just with one instance, but if you're working with multiple instances of a certain type of object then you want to create a constructor */ 


// Peson constructor
function Person(name){ // all the constructors name should began with a capital letter
  this.name = name;
}

const brad = new Person('Brad');
const john = new Person('John');
  

console.log(brad);



// Peson constructor
function Person(name, age){ // all the constructors name should began with a capital letter
  this.name = name;
  console.log(this); // will return all the instances of this 'function' I guess
  this.age = age;
  console.log(this.age); // this will give us the age from all the instances
}

console.log(this); // when 'this' is in the global scope it will get the window object


const brad = new Person('Brad', 36);
const john = new Person('John', 30);


console.log(john.age); // this will give us the john's age



// Peson constructor
function Person(name, dob){ // all the constructors name should began with a capital letter
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age); // this will give us the john's age

const brad = new Person('Brad ', '9-10-1980');
console.log(brad.calculateAge())




/* 044 BUILD IN CONSTRUCTORS */

/* what we do in this lecture is something that we will not use very often */


// String

const name1 = 'Jeff';
const name2 = new String('Jeff'); /* this is a 'string' object, not a primitive value */

console.log(name1); /* we will get 'Jeff' of course */
 
console.log(name2); /* we will get 'Jeff' but as on object(string), and on each indexes from 0 to (length - 1) we will have each letter of our string*/

// name2.foo = 'bar'; /* in this case we will have an index 'foo' which will have the value 'bar', in addition to the object strig */


console.log(typeof name2); /* this will return on object, not an primitive value, even if name2 is a string(cause we use the construct new to create it) */

if(name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}  // this will console.log YES

if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
} // this will consle.log NO because the type is not equal to a string 

if(name2 == 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
} // this will be YES cause is checking just if the value is equal to 'Jeff'


 
// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2); // this will console.log 5 under a number object 


// Boolean
const bool1 = true;
const bool2 = new Boolean(true); 

console.log(bool2); // this will console.log 'true' under a boolean object 


// Function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1'); // this is a function object I guess and it's look very weird

console.log(getSum2(1,1));

// Object
const john1 =  {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);  



// Arrays
const array1 = [1,2,3,4];
const arr2 =  new Array(1,2,3,4);

console.log(arr2);



// Regular Expressions
const re1 =/\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);




// 045 PROTOTYPES EXPLAINED


//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970); // all the methods of the construct it's going in the prototype or in the object prototype
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;  
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith'); // also we can manipulate the construct with our methods from prototype
   
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName')); 
console.log(mary.hasOwnProperty('getFullName')); 




// 046 PROTOTYPAL INHERITANCE

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName); // this will inherit the firstName and the lastName from the Person(the same parameters), but will not inherit the Person.prototype methods

  this.phone = phone;
  this.membership = membership; 
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype); // this will inherit the Person.prototype methods into Customer.prototype methods

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer ('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
} // this will overwrite the Person.prototype.greeting()

console.log(customer1.greeting());




// 047 USING OBJECT CREATE 


const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes); // this automaticly will inherit the Prototyes methods and it's another way to create an object
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting()); // we will get 'Hello there Mary Williams 

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());



//  048 ES6 CLASSES


class  Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}  // class it has the constuctor and the prototypes methods inside it self(I think it's much easier)

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

// console.log(mary.addNumbers(1, 2)); // this will get an error because it's a static method and it's not instantiated to the instance or object mary(in this case)

console.log(Person.addNumbers(1,2)); // but this will work cause we are usig the class Person and it's static method addNumbers()




// 049 SUB CLASSES


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName); // in this way we are calling the Person constructor super(parameters from Person constructor) (or this is calling the parent class constructor)    Customer is an extention of Person or a subclass, and in this way we'll inherit the properties of Person to Customer (nice and easy trick with ES6)

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);  // will console.log the Customer 'object' with properties from john instance

console.log(john.greeting());

console.log(Customer.getMembershipCost()); // this will retrn the value from the static method getMembershipCost(), we can use Customer.getMembershipCost(), but we can't use Person.getMembershipCost() because we extent Customer from Person not the other way around



// 050 BUILD THE BOOK LIST UI



// 051 ADD BOOK TO LIST


// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

   list.appendChild(row);
};

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value; 

  // Instantiate book      
  const book = new Book(title, author, isbn);
  
  // Instanciate UI
  const ui = new UI();
   
  // Add book to list
  ui.addBookToList(book) 

  // Clear fields
  ui.clearFields();

  e.preventDefault();
});





// 052 VALIDATION ALERT


// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

   list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form)

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value; 

  // Instantiate book      
  const book = new Book(title, author, isbn);
  
  // Instanciate UI
  const ui = new UI();
  
  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book) 

    // Show succes
    ui.showAlert('Book Added', 'success');

    // Clear fields
    ui.clearFields();
      }

  e.preventDefault();
});




// 053 DELETE BOOK FROM LIST

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});



// 054 CONVERT TO ES6 CLASSES

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});



// 055 BONUS ADD LOCAL STORAGE


class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to LS
    Store.addBook(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});



// 056 WHAT IS ASYNCHRONOUS PROGRAMMING


/* Most Async code we work with will be part on an API or library

- XMLHttpRequest & Fetch

-jQuery Ajax, Axios, other HTTP request

-Node.js fs(file system) module




// 057 AJAX XHR INTRODUCTION


AJAX - Asynchronous JavaScript & XML

- it's a set of web technologies to send and receive data from the client and server and it does it asynchronously 

- it's done behind the scene without having explicity to reload the web page 

- XML is very rarely used in AJAX anymore, JSON take it's place

- AJAX can work with plain text



XHR - XmlHttpRequest

- an API in the form of an object

- the core technology in AJAX

- provided by the browsers JS enviroment

- it's methods transfer data between client / server or browser / server 

- can be used  with other protocols than HTTP

- can work with data other than XML (JSON, plain text)


Libraries & Other Methods

- Fetch API

- Axios

- Superagent

-jQuery

- Node HTTP
*/


// 058 XMR OBJECT METHODS WORKING WITH TEXT 

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object 
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  } 
  
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }   this is like an older syntax (but we use the syntax above)

  xhr.onerror = function() {  // you are using this in case something goes wrong
    console.log('Request error...');
  }

  xhr.send();


    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


  // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}



// 59 WORKING WITH AJAX JSON


// https://jsonlint.com/ - check if you JSON is valid


{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": 
} // this is an JSON object, the key shoud be with double quotes "key" and the string as well as you can see above




document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}



// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);
      
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}



// 060 DATA FROM AN EXTERNAL API - CHUCK NORRIS PROJECT


document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `	
  http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';
      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`; 
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}



// 061 REST APIs HTTP REQUESTS



// API - Application Programming Interface

/* - a contract provided by one piece of software to another 

   - structured request and response */

// REST APIs - Representational State Transfer
/* - takes multiple types of HTTP request  

// HHTP Requests
  - GET: retrieve data from a specified resource(it give us information like users, posts, an so on...)
  -POST: submit data to be processed to a specified resource(it's when we post a resource or something like that)
  -PUT: update a specified resource (it's when we update an existing resource)
  -DELETE: delete a specified resource


  -HEAD: same as GET but does not return a body
  -OPTIONS: returns the supported HTTP methods
  PATCH: update partial resources


// API Endpoints
GET  https://someurl.com/api/users - Get all the users
GET https://someurl.com/api/users/1 - Get single user
POST https://someurl.com/api/users - Add user
PUT https://someurl.com/api/users/1 - Update user
DELETE https://someurl.com/api/users/1 - Delete user
*/

// An API is the "messenger" and REST let's us use HTTP requests to format that message




// 062 CALLBACK FUNCTIONS

// A Callback is a function that is passed in as a parameter to another function and it's run in the function body 

// We have synchronous callbacks and async callbacks

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function(){
//     posts.push(post)
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts(); // the server took 2 second to get the post and it took 1 second to create the post and we did this in synchronous way

function createPost(post, callback) {
  setTimeout(function(){
    posts.push(post)
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);


// 63 CUSTOM HTTP LIBRARY(AJAX WITH CALLBACKS) - PART 1 


<script src="easyhttp.js"></script>
<script src="app.js"></script> // the order it's important because we'll gonna use the library(first script) in our app(app.js)


function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  this.http.onload = function() {
    if(this.http.status === 200) { // this.http.status is not defined because in in the function(is in another scope here), 'this' actually refers to this function (arrow function from ES6 fixed this problem), so if we using arrow function in this case will work 
      console.log(this.http.responseText); // same here as well
    }
  }

  this.http.send();
}

// we can solve the problem above with what we have below 

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  let self = this; // so will use 'this' under 'self' variable inside the function below 
  this.http.onload = function() {
    if(self.http.status === 200) {
      console.log(self.http.responseText);
    }
  }

  this.http.send();
}




// easyhhp.js
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText); //here null is for the error(first parameter that is passed back and just after that the response )
    } else { // this else in in case that we have some error
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request



// app.js


// 064 CUSTOM HTTP LIBRARY (AJAX WITH CALLBACKS) - PART 2


// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post)  { // this will give us a single post
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
}); 



// app.js
const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});



// easyhttp.js

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json'); // when we make a post or a put we have to put this in the "header" or anyway something like that

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}




// 065 ES6 PROMISES


// Promises without errors

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){  // this is instead of callback
    setTimeout(function() {
      posts.push(post);
      resolve() // here as well
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts);  // and here of course




// Promises with errors

const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = true; // and here we simulate that we have an error

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) { // we used here catch
  console.log(err);
});




// 066 THE FETCH API 

// app.js

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson); 

document.getElementById('button3').addEventListener('click', getExternal)

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}



// posts.json

[
  {
    "title": "Post One",
    "body": "This is post one"
  },
  {
    "title": "Post Two",
    "body": "This is post two"
  },
  {
    "title": "Post Three",
    "body": "This is post three"
  }
]


// 067 ARROW FUNCTIONS

// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');  // this arrow function is the same as the one above just it has =>
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello' // this is with return like below
/* const sayHello = funcion() {
  return 'Hello'
}  */


// Return object
// const sayHello = () => { msg: 'Hello'}; // this will not look for an object literal, it will look for a funcion body because of the curly braces so we will have to do it like below
// const sayHello = () => ({ msg: 'Hello'});

// Single param does not need parenthesis 
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths)



// FETCH API with arrow function

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(res => res.text())  // first it gets the data 
    .then(data => {    // then will parse it
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())  // first it gets the data 
    .then(data => {     // then I guess it parse it cause it's in JSON format
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())  // first it gets the data
    .then(data => {  // then I guess it parse it cause it's in JSON format(I guess)
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}



// 068 CUSTOM HTTP LIBRARY (FETCH WITH PROMISES)


// app.js

const http = new EasyHTTP;

// Get Users 
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));



// easyhttp2.js

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data)) 
      .catch(err => reject(err));
    });
  }
  
  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',    // here we specify what kind of method do me use
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)  
      })
      .then(res => res.json())
      .then(data => resolve(data)).catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',  // here we specify what kind of method do me use
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE 
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',  // here we specify what kind of method do me use
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...')) 
      .catch(err => reject(err));
    });
  }  
}




// 069 ASYNC AWAIT

async function myFunc() {
  return 'Hello';
}

console.log(myFunc()); // this is returning a Promise



async function myFunc() {
  return 'Hello';
}

myFunc()
  .then(res => console.log(res)); // this wil return the actual return from our function myFunc



async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const res = await promise; // Wait until the promise is resolved

  return res;
}
  
myFunc()
  .then(res => console.log(res));



async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;

  if(!error){
    const res = await promise; // Wait until the promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}  
  
    
  
myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

  
async function getUsers() {
  // await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  // Only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));





// 070 CUSTOM HTTP LIBRARY(FETCH WITH ASYNC AWAIT)


// easyhtt3.js

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
   
  }

   // Make an HTTP PUT Request
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'Resource Deleted...';
    return resData;
  }

 }



// app.js

const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));





// 071 GITHUB FINDER PART 1 - INTRO UI


// just build the UI, not much




// 072 GITHUB FINDER PART 2 - FETCHING PROFILE DATA


// app.js

// Init Github
const github = new Github;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  
  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
      }
    })
  } else {
    // Clear profile
    
  }
});


// github.js

class Github {
  constructor(){
    this.client_id = 'd4f6d1a844a7023d1553';
    this.client_secret = 'a2b0513aa43c15282bd1d521fd4438338eaab337';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}




// 073 GITHUB FINDER PART 3 - DISPLAY THE PROFILE

// app.js

// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  
  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear profile

  }
});



// github.js

class Github {
  constructor(){
    this.client_id = 'd4f6d1a844a7023d1553';
    this.client_secret = 'a2b0513aa43c15282bd1d521fd4438338eaab337';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}



// ui.js

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
}




// 074 GITHUB IFNDER PART 4 - SHOW ALERT MESSAGE


// app.js

// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  
  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});


// github.js

class Github {
  constructor(){
    this.client_id = 'd4f6d1a844a7023d1553';
    this.client_secret = 'a2b0513aa43c15282bd1d521fd4438338eaab337';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}


// ui.js

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove(); 
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}


// 075 GITHUB FINDER PART 5 - FETCH DISPLAY REPOS


// app.js

// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
}); 


// github.js

class Github {
  constructor() {
    this.client_id = 'd9308aacf8b204d361fd';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}


// ui.js

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div  =  document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container =  document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}





// 076 WEATHER JS PART 1 - INTRO


// building the UI in index.html




// 077 WEATHER JS PART 2 - FETCH WEATHER FROM API


// app.js

// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results)
    })
    .catch(err => console.log(err));
}


// weather.js

class Weather {
  constructor(city, state){
    this.apiKey = '4b2c4f8b893ef948';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}




// 077 WEATHER JS PART 3 - DISPLAY THE WEATHER 


// app.js

// Init weather object
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}


// ui.js

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
  }
}


// weather.js

class Weather {
  constructor(city, state) {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}



// 079 WEATHER JS PART 4 - SAVE LOCATION TO LOCAL STORAGE

// app.js
// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}


// storage.js
class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Tampa';
    this.defaultState = 'FL';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}

// ui.js
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
  }
}



// weather.js
class Weather {
  constructor(city, state) {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}




// 080 ERROR HANDLING WITH TRY...CATCH

try {
  // Produce a ReferenceError
  myFunction();
} catch(e) { // here e is the error object, it can be err or error
  console.log(e);  // this will console.log us what tipe of error we have and the message
}   

console.log('Program continues...');  // a nice thing about try and catch is that can handle the errors with running the script, even if you have errors in your script it will run that part that is without errors


try {
  // Produce a ReferenceError
  myFunction();
} catch(e) { // here e is the error object, it can be err or error
  // console.log(e);
  console.log(e.message); // this will console.log just the message of the error
  console.log(e.name); // this will console.log the type of the error
  console.log(e instanceof ReferenceError); // this will return true or false, this means if the error is a ReferenceError
} 

console.log('Program continues...');





try {
  // Produce a ReferenceError
  myFunction();
} catch(e) { // here e is the error object, it can be err or error
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');  // this will run no matter of what happens with the errors
}




try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  null.myFunction();
} catch(e) { // here e is the error object, it can be err or error
  console.log(e); // this will console.log the TypeError in this case and even the message
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');





try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  null.myFunction();
} catch(e) { // here e is the error object, it can be err or error
  console.log(`ITS NULL STUPID`); // this will console.log if there is an error like in try{}
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');




try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError 
  eval("Hello World"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

} catch(e) { // here e is the error object, it can be err or error
  console.log(e); // this will console.log us the SyntaxError in this case with the message, here it's looking for a variable
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');



try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError 
  // eval("Hello World");

  // Will produce a URIError
  decodeURIComponent('%');

} catch(e) { // here e is the error object, it can be err or error
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');





const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError 
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    throw 'User has no name'; // in this case, because user has no name, it will 'throw' or console.log it this message but the error object should be console.log it in the 'catch'
  }

} catch(e) { // here e is the error object, it can be err or error
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');







const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError 
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name'); // this will 'throw' in the console if in the 'catch' block we console log the error object the type of error which we created, in this case SyntaxError with the message which we want it, in this case 'User has no name'
  }

} catch(e) { // here e is the error object, it can be err or error
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');




const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError 
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e) { // here e is the error object, it can be err or error
  console.log(`User Error: ${e.message}`); // actually we can do what we want with the error
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');






//  081 REGULAR EXPRESSIPNS PART 1 - EVALUATION FUNCIONS 


let re;
re = /hello/;

console.log(re); // it will console.log re exactly how we declare it /hello/
console.log(re.source); //here it will console.log it just the text 'hello'



let re;
re = /hello/;

// console.log(re); // it will console.log re exactly how we declare it /hello/
// console.log(re.source); //here it will console.log it just the text 'hello'

// exec() - Return result in an array or null
const result = re.exec('hello world');
console.log(result); // this will return an array, first will have the actually string, 'hello',  after that we will have the index where the matching is starting, the match of the input which we'll put in the exec(), in this case 'hello world' and after that  we will have the actually input, this will log what is follow '["hello", index: 0, input: "hello world"]',it will match just words, not characters from them, but it will work if in input is that word with extra characters after it like following 'const result = re.exec('hellodededd world')'



const result = re.exec('hi world'); // if the input of exec() is not matching anything in the string it will return null
console.log(result);


console.log(result[0]);
console.log(result.index);
console.log(result.input);


let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // Global search, it will look for all instances(in a paragraph let's say), not just for the first one when it finds it


// test() - Returns true or false
const result = re.test('hello'); // it will look to see if in the re is the word hello, and if is it will return true, if isn't it will return false 
console.log(result);


const result = re.test('hellokdjf');  // will return true


let re;
re = /hello/;
re = /hello/i

// match() - Return result array or null
const str = 'Hello There';
const result = str.match(re); // it will return an array like at the exec(), at the first index we'll have the word which was match 'Hello' in this case, after that we will have the index where if was found, and after that we will have the input as following ["Hello", index: 0, input: "Hello There"]
console.log(result);
// it will not work if str will be like 'Hell There' and it will return null, but it will work if we have something like 'Hello2 There'


let re;
re = /hello/;
re = /hello/i

// search - Returns index of the first match if not found returns -1
const str = 'Hello There';
const result = str.search(re); // this is looking in the str 'Hello There' to see if is what is in the re '/hello/i' and if is it will return the index where it found it(start the match)(in this case 0), and if there wasn't any match will return -1
console.log(result);

// it will work if str is 'Hello2 There' but it will return -1 if str is 'Hell There' for example


let re;
re = /hello/;
re = /hello/i;

// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi'); // this will replace in str 'Hello There' what matches with re 'hello', with actually 'Hi'
console.log(newStr);




// 082 REGULAR EXPRESSIONS PART 2 - METACHARACTER SYMBOL


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;     // Must start with, the actuall str have to start with (in our case)
re = /d$/i;    // Must end with, the actuall str have to end with (in our case)
re = /World$/i; // this will match as well
re = /^hello$/i; // Must begin and end with,  this will match just if str = 'Hello'
re = /^h.llo$/i;    // Matches any ONE character, it will match if instead of . in str will have any character(but it will have to be just one character)
re = /h*llo/i;   // Matches any character 0 or more times, so in str * can be any character as many times we want, but it must be follow by llo (in this case) (This is a WILDCARD)
re = /gre?a?y/i;  // Optional character, this means that every character before ? is optional so we can have in str 'grey', 'gray' or even 'gry' and it will be correct
re = /gre?a?y\?/i;   // Escape character, this means that we want to have '?' (in this case in the str, not to be an optional character what is before it), so we have to use '\'(backslash) before it and it will be just fine
 

// String to match
const str = 'Gray?';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);





// 083 REGULAR EXPRESSIONS PART - 3 CHARACTER SETS QUANTIFIERS


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e, if isn't it will return null, even it will not be at all it will return null
re = /[GF]ray/;   // Must be G or F(uppercase)
re = /[^GF]ray/i; // Matching anything except a G or F
re = /[A-Z]ray/;  // Match any uppercase letter, the first character
re = /[a-z]ray/; // Match any lowercase letter, the first character
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/;  // Match any digit, also 10ray it will match, you can do as many expressions as you want re = /[0-9][0-9]ray/; (something like this)

// Braces {} - Quantifiers
re = /Hel{2}o/i; // this will match the letter before braces as many times between them, str 'Hello; matches / Must occur {m} amount of times
re = /Hel{2,4}o/i; // Must occur at least {minimun, x} and at most {x, maximum}
re = /Hel{2,}o/i;  // Must occur at least {m} times
 
// Parenthesis () - Grouping
re = /^([0-9]x){3}$/;

// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);





// 084 REGULAR EXPRESSIONS PART 4 SHORTHAND CHARACTER CLASSES 



let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/; // Word character - aphanumeric or _ (it can be any letter or any number and underscore '_'), this will find the first word character
re = /\w+/;  // it will look at all the word characters, that means it will give the first word I guess / + = one or more
re = /\W/; // Non- Word character - anything but not a letter, number or underscore '_'
re = /\d/;  // Match any digit
re = /\d+/;  // Match any digit 0 or more times
re = /\D/;  // Match any Non-digit , re = /\D+/; Match any Non-digit 0 or more times
re = /\s/; // Match whitespace char
re = /\S/; // Maatch non-whitespace char
re = /Hell\b/i;  // Word boundary // this is actully looking for word Hell(in this case)

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y  

// String to match
const str = 'xy';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);




// 085 REGULAR EXPRESSIONS - FORM VALIDATION PROJECT



// index.html

// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

//     <title>Hello, world!</title>
//   </head>
//   <body>
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 mx-auto">
//           <h1>User Form</h1>
//           <form>
//             <div class="form-group">
//               <label>Name</label>
//               <input type="text" class="form-control" id="name" placeholder="Name">
//               <div class="invalid-feedback">
//                 Name be between 2 and 10 characters
//               </div>
//             </div>
//             <div class="form-group">
//               <label>Zipcode</label>
//               <input type="text" class="form-control" id="zip" placeholder="Zipcode">
//               <div class="invalid-feedback">
//                 Enter a valid zipcode
//               </div>
//             </div>
//             <div class="form-group">
//               <label>Email</label>
//               <input type="text" class="form-control" id="email" placeholder="Email">
//               <div class="invalid-feedback">
//                 Enter a valid email
//               </div>
//             </div>
//             <div class="form-group">
//               <label>Phone Number</label>
//               <input type="text" class="form-control" id="phone" placeholder="Phone Number">
//               <div class="invalid-feedback">
//                 Enter a valid phone
//               </div>
//             </div>
//             <input type="submit" value="Submit" class="btn btn-primary btn-block">
//           </form>
//         </div>
//       </div>
//     </div>

//     <!-- Optional JavaScript -->
//     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
//     <script src="app.js"></script>
//   </body>
// </html>


// app.js

// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?/;

  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const zip = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}



// 085 ITERATORS GENERATORS

// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} : {done: true}
    }
  }
}


// Create an array of names
const namesArray = ['Jack', 'Jill','John'];
// Init iterator and pass in the names array 
const names = nameIterator(namesArray);

console.log(names.next()); // it will give us this object {value: "Jack", done: false}
console.log(names.next().value); // it will give us the first value of namesArray
console.log(names.next().value); // if we doing the same as above and adding a console.log again it will give us the next element of the namesArray, here 'John'
console.log(names.next().value); // and if we are doing it again, it will give us undefined because there are no values anymore declared by us in the namesArray, and so on


// Generator Example
function* sayNames() { // '*' after the word function it tell us that this is a generator not a function
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next()); // this will return as an object same as was return at the iterator: {value: "Jack", done: false}

console.log(name.next().value); // this will return us the first value 'yield' in the generator 'sayNames()' in this case Jack
console.log(name.next().value); // if we console.log one after another console.log it will give use the second value which was yield in the generator 'sayNames()' in this case Jill
console.log(name.next().value); // if we doing again it will give us the next 'yield' value in the generator 'sayNames()' in this case 'John'
console.log(name.next().value);  // if we doing again it will give us 'undefined' cause there was yield just 3 values


// ID Creator
function* createIds() {
  let index = 1;

  while(true){
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);  // it wil give us 1
console.log(gen.next().value);  // it wil give us 2
console.log(gen.next().value);  // it wil give us 3
console.log(gen.next().value);  // it wil give us 4
console.log(gen.next().value);  // it wil give us 5
console.log(gen.next().value);  // it wil give us 6
console.log(gen.next().value);  // it wil give us 7 and so on 



// 087 PROFILE SCROLLER ITERATOR MINI PROJECT


// index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

//     <title>Profile Scroller</title>
//   </head>
//   <body>
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 mx-auto text-center">
//           <h1 class="mb-3">Profile Scroller</h1>
//           <div id="imageDisplay"></div>
//           <br>
//           <div id="profileDisplay"></div>
//           <br>
//           <button id="next" class="btn btn-dark btn-block">Next</button>
//         </div>
//       </div>
//     </div>

//     <!-- Optional JavaScript -->
//     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
//     <script src="app.js"></script>
//   </body>
// </html>


// app.js

const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}




// 088 SYMBOLS

// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);  // symbol it's a primitive data value

console.log(Symbol() === Symbol()); // two symbol cannot be the same, this means this will give us false

console.log(Symbol('123') === Symbol('123')); // it will give us false as well

console.log(`Hello ${sym1}`); // it will gives an error like this: 'TypeError: Cannot convert a Symbol value to a string'

console.log(`Hello ${String(sym1)}`); // this will transform sym1 into string

console.log(`Hello ${sym1.toString()}`); // this one as well it will turn into string the Symbol

myObj[KEY1] = 'Prop1';  // this means that first key of the object myObj will be Symbol() / so this is a key not a property
myObj[KEY2] = 'Prop2'; // this means that the second key of the object myObk will be Symbol('123') / so this is a key not a property
myObj.key3 = 'Prop3'; // this a property
myObj.key4 = 'Prop4'; // this as well is a property, and they will be at beggining of the object, after that the keys are coming

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);
console.log(myObj)

// Symbols are not enumerable in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
} // just the properties will appear, Symbols will not appear

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // this will not work, it will give us on empty object, not like one above




// 089 Destructuring


// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

console.log(a); // it will give us 100, and if we console.log(b) it will give us 200

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(rest); // this it will give us an array with [300, 400, 500] because of ...rest


let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(rest); // in this case the array will be [400, 500] and if we console.log(c) it will be 300


let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });


console.log(a, b) // we will get 200 for a and 300 for b


let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });


console.log(rest); // it wil give us an object like this {c: 300, d: 400, e: 500}


// Array Destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);  // it will give us John Beth Mike


// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3); // we will get John Beth Mike as well as above


// Object Destructuring

// you're using this if you are working with React or ES6 modules

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Old ES5
// const name = person.name;
//       age = person.age;
//       city = person.city;

// New ES6 Destructuring
const { name, age, city } = person;

console.log(name, age, city); // this will give us John Doe 32 Miami, it easier and cleaner then ES5, what we did above


const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name;
//       age = person.age;
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city); 




// 090 ES6 MAPS

// MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1)); // we will get 'Value of key1' which is actually value of key1
console.log(map1.get(key1), map1.get(key2),map1.get(key3))


// Count values
console.log(map1.size); // it will give us the number of key-value pairs in that map



const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// ITERATING MAPS

// Loop using for...of to get keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
} /* it will give us 
some string = Value of key1
[object Object] = Value of key2
function() {} = Value of key3 */

// Iterate keys only
for(let key of map1.keys()) {
  console.log(key);
} // it will give us
// some string
// {}
// ƒ () {}

// Iterate values only
for(let value of map1.values()) {
  console.log(value);
} // it will give us
// Value of key1
// Value of key2
// Value of key3
 
// Loop with forEach
map1.forEach(function(value, key){
  console.log(`${key} = ${value}`);
});

// CONVERT TO ARRAYS

// Create an array of key value pairs
const keyVallArr = Array.from(map1);
console.log(keyVallArr); // it will convert to an array

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);


 

// 091 ES6 SETS


// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100) // it will not add again because is already there

console.log(set1); // it will give us a set with 4 different values


const set2 = new Set([1, true, 'string']); // we also can use this format to create a Set
console.log(set2); 

// Check for values
console.log(set1.has(100)); // it will give us true if that value is in the set or false if that value is not in the set
console.log(set1.has(50 + 50)); // this also will give us true cause 50 + 50 is 100
console.log(set1.has({name: 'John'})); // it will give us false cause is not a primitive type of data, it's located in the heap


console.log({name: 'John'} === {name: 'John'}); // it will give us false because is located in the heap an is pointing to another location in memory(I guess if I am not wrong), it's not a primitive type


// ITERATING THROUGH SETS

// For..of
for(let item of set1) {
  console.log(item);
} // it will loop through the set1 an it will console.log the actual values of the set1

for(let item of set1.values()) {
  console.log(item);
} // we will get the same things as above

for(let item of set1.keys()) {
  console.log(item);
} // we will get the same things as above

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
}); // it will give us the values of the set one

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr); // it will put our values from set1 into an array setArr in this case



// 092  WHAT ARE PATTERNS

// A pattern is a re-usable solution that can be applied to occurring problems in software design (JavaScript Applications)

// Can also be thought of as programming templates

/* Patterns we will look at

Module
Revealing Module Pattern
Singleton
Factory
Observer
Mediator  
State      */




// 093 MODULE REVEALING MODULE PATTERN


// Basic sructure

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();

// STANDARD MODULE PATTERN
const UICtrl = (function(){
  let text = 'Hello World'; // every function below here till to return (in IIFE) is a private function

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;      
  }
  // we cannot call the function above here because they are privare, but we can call them in the 'return' cause they are in the same big function(IIFE)();
  return { // every function below here(in this IIFE) is a public function
    callchangeText: function() {
      changeText();
      console.log(text);
    }
  } // we can call functions which are privare from this big function (IIFE)();
})();

UICtrl.callchangeText(); // we can call these publice function and it will work
UICtrl.changeText(); // we cannot call this function because is a private function and it will give us an error
console.log(UICtrl.text); // this will give us undefined

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = []; // you can also see _data cause is a private variable

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id; 
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));




// 094 SIGLETON PATTERN 

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object('Object instance');
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();

console.log(instanceA);



const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // true, we cannot have more than one instance




// 095 FACTORY PATTERN 

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if(type === 'standard') {
      member = new StandardMembership(name);
    } else if(type === 'super') {
      member = new StandardMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackos', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));
// console.log(members);

members.forEach(function(member) {
  member.define();
});




// 096 OBSERVER PATERN

// index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>JavaScript Sandbox: Patterns</title>
// </head>

// <body>
//   <h1>JavaScript Sandbox: Patterns</h1>
//   <button class="sub-ms">Subscribe to Milliseconds</button>
//   <button class="unsub-ms">Unsubscribe from Milliseconds</button>
//   <br><br>
//   <button class="sub-s">Subscribe to Seconds</button>
//   <button class="unsub-s">Unsubscribe from Seconds</button>
//   <br><br>
//   <button class="fire">Fire</button>
//   <script src="appes6.js"></script>
// </body>

// </html>


// app.js

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}


// appes6.js

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}




// 097 MEDIATOR PATTERN

const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever', brad);
jeff.send('Hello Everyone!!!');




// 098 STATE PATTERN - SMALL PROJECT

// index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">

//   <title>JavaScript Sandbox: Patterns</title>
// </head>

// <body>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
//         <a class="navbar-brand" href="#">State Pattern</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//           <span class="navbar-toggler-icon"></span>
//         </button>
      
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item">
//               <a id="home" class="nav-link" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a id="about" class="nav-link" href="#">About</a>
//             </li> 
//             <li class="nav-item">
//               <a id="contact" class="nav-link" href="#">Contact</a>
//             </li> 
//           </ul>
//         </div>
//       </nav>

//       <div class="container">
//         <h1 id="heading"></h1>
//         <div id="content"></div>
//       </div>

//       <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
//       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
//   <script src="app.js"></script>
// </body>

// </html>


// app.js

const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
`;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});





// 099 PROJECT INTRODUCTION


// 100 CREATING THE UI WITH MATERIALIZE

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
//   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
//   <title>Tracalorie | Meal & Calorie Tracker</title>
// </head>
// <body>
//   <!-- Navbar -->
//   <nav>
//     <div class="nav-wrapper blue">
//       <div class="container">
//         <a href="#" class="brand-logo center">Tracalorie</a>
//         <ul class="right">
//           <li><a href="#" class="clear-btn btn blue lighten-3">Clear All</a></li>
//         </ul>
//       </div>
//     </div>
//   </nav>

//   <br>

//   <div class="container">
//     <!-- Form Card -->
//     <div class="card">
//       <div class="card-content">
//         <span class="card-title">Add Meal / Food Item</span>
//         <form class="col">
//           <div class="row">
//             <div class="input-field col s6">
//               <input type="text" placeholder="Add Item" id="item-name">
//               <label for="item-name">Meal</label>
//             </div>
//             <div class="input-field col s6">
//                 <input type="text" placeholder="Add Calories" id="item-calories">
//                 <label for="item-calories">Calories</label>
//             </div>
//             <button class="add-btn btn blue darken-3"><i class="fa fa-plus"></i> Add Meal</button>
//             <!--
//             <button class="update-btn btn orange"><i class="fa fa-pencil-square-o"></i> Update Meal</button>
//             <button class="delete-btn btn red"><i class="fa fa-remove"></i> Delete Meal</button>
//             -->
//             <button class="back-btn btn grey pull-right"><i class="fa fa-chevron-circle-left"></i> Back</button>
//           </div>
//         </form>
//       </div>
//     </div>

//     <!-- Calorie Count -->
//     <h3 class="center-align">Total Calories: <span class="total-calories">0</span></h3>

//     <!-- Item List -->
//     <ul id="item-list" class="collection">
//       <!--
//       <li class="collection-item" id="item-0">
//         <strong>Steak Dinner: </strong> <em>1200 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="fa fa-pencil"></i>
//         </a>
//       </li>
//       <li class="collection-item" id="item-0">
//         <strong>Cookie: </strong> <em>400 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="fa fa-pencil"></i>
//         </a>
//       </li>
//       <li class="collection-item" id="item-0">
//         <strong>Eggs: </strong> <em>300 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="fa fa-pencil"></i>
//         </a>
//       </li>
//     -->
//     </ul>
//   </div>


//   <script
//   src="https://code.jquery.com/jquery-3.2.1.min.js"
//   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//   crossorigin="anonymous"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>    
//   <script src="app.js"></script>
// </body>
// </html>




// 101 CONTROLLERS DATA STRUCTURE


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }
  
  // Public methods
  return {
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  
  // Public methods
  return {

  }
})();




// App Controller
const App = (function(ItemCtrl, UICtrl){

  // Public methods
  return {
    init: function(){
      console.log('Initializing App...');
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();




// 102  GET POPULATE ITEMS 


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }
  
  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';
      
      items.forEach(function(item){ 
        html += ` <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();


// 103 ADD ITEM TO DATA STRUCTURE


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();




// 104 ADD ITEM TO THE UI



// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();



// 105  ADD TOTAL CALORIES



// index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
//   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
//   <title>Tracalorie | Meal & Calorie Tracker</title>
// </head>
// <body>
//   <!-- Navbar -->
//   <nav>
//     <div class="nav-wrapper blue">
//       <div class="container">
//         <a href="#" class="brand-logo center">Tracalorie</a>
//         <ul class="right">
//           <li><a href="#" class="clear-btn btn blue lighten-3">Clear All</a></li>
//         </ul>
//       </div>
//     </div>
//   </nav>

//   <br>

//   <div class="container">
//     <!-- Form Card -->
//     <div class="card">
//       <div class="card-content">
//         <span class="card-title">Add Meal / Food Item</span>
//         <form class="col">
//           <div class="row">
//             <div class="input-field col s6">
//               <input type="text" placeholder="Add Item" id="item-name">
//               <label for="item-name">Meal</label>
//             </div>
//             <div class="input-field col s6">
//                 <input type="number" placeholder="Add Calories" id="item-calories">
//                 <label for="item-calories">Calories</label>
//             </div>
//             <button class="add-btn btn blue darken-3"><i class="fa fa-plus"></i> Add Meal</button>
//             <!--
//             <button class="update-btn btn orange"><i class="fa fa-pencil-square-o"></i> Update Meal</button>
//             <button class="delete-btn btn red"><i class="fa fa-remove"></i> Delete Meal</button>
//             -->
//             <button class="back-btn btn grey pull-right"><i class="fa fa-chevron-circle-left"></i> Back</button>
//           </div>
//         </form>
//       </div>
//     </div>

//     <!-- Calorie Count -->
//     <h3 class="center-align">Total Calories: <span class="total-calories">0</span></h3>

//     <!-- Item List -->
//     <ul id="item-list" class="collection">
//       <!--
//       <li class="collection-item" id="item-0">
//         <strong>Steak Dinner: </strong> <em>1200 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="edit-item fa fa-pencil"></i>
//         </a>
//       </li>
//       <li class="collection-item" id="item-0">
//         <strong>Cookie: </strong> <em>400 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="edit-item fa fa-pencil"></i>
//         </a>
//       </li>
//       <li class="collection-item" id="item-0">
//         <strong>Eggs: </strong> <em>300 Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="edit-item fa fa-pencil"></i>
//         </a>
//       </li>
//     -->
//     </ul>
//   </div>


//   <script
//   src="https://code.jquery.com/jquery-3.2.1.min.js"
//   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//   crossorigin="anonymous"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>    
//   <script src="app.js"></script>
// </body>
// </html>


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();




// 106 WORKING WITH THE EDIT STATE


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();



// 107 UPDATING ITEMS TOTAL CALORIES


// app.js

// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click edit item
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

     // Get total calories
     const totalCalories = ItemCtrl.getTotalCalories();
     // Add total calories to UI
     UICtrl.showTotalCalories(totalCalories);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();





// 108 DELETE CLEAR ITEMS


// app.js


// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

     // Back button event
     document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

     // Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click edit item
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

     // Get total calories
     const totalCalories = ItemCtrl.getTotalCalories();
     // Add total calories to UI
     UICtrl.showTotalCalories(totalCalories);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  // Delete button event
  const itemDeleteSubmit = function(e){
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }


  // Clear items event
  const clearAllItemsClick = function(){
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // Remove from UI
    UICtrl.removeItems();

    // Hide UL
    UICtrl.hideList();
    
  }

  // Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();




// 109 ADD GET FROM LOCAL STORAGE


// app.js

// Storage Controller
const StorageCtrl = (function(){
  // Public methods
  return {
    storeItem: function(item){
      let items;
      // Check if any items in ls
      if(localStorage.getItem('items') === null){
        items = [];
        // Push new item
        items.push(item);
        // Set ls
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what is already in ls
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // Re set ls
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function(){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    }
  }
})();


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    // items: [
    //   // {id: 0, name: 'Steak Dinner', calories: 1200},
    //   // {id: 1, name: 'Cookie', calories: 400},
    //   // {id: 2, name: 'Eggs', calories: 300}
    // ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

     // Back button event
     document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

     // Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      //Store in localStorage
      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click edit item
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

     // Get total calories
     const totalCalories = ItemCtrl.getTotalCalories();
     // Add total calories to UI
     UICtrl.showTotalCalories(totalCalories);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  // Delete button event
  const itemDeleteSubmit = function(e){
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }


  // Clear items event
  const clearAllItemsClick = function(){
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // Remove from UI
    UICtrl.removeItems();

    // Hide UL
    UICtrl.hideList();
    
  }

  // Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize App
App.init();




// 110 DELETE CLEAR FROM LOCAL STORAGE


// app.js

// Storage Controller
const StorageCtrl = (function(){
  // Public methods
  return {
    storeItem: function(item){
      let items;
      // Check if any items in ls
      if(localStorage.getItem('items') === null){
        items = [];
        // Push new item
        items.push(item);
        // Set ls
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what is already in ls
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // Re set ls
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function(){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(updatedItem.id === item.id){
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id){
      let items = JSON.parse(localStorage.getItem('items'));
      
      items.forEach(function(item, index){
        if(id === item.id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function(){
      localStorage.removeItem('items');
    }
  }
})();


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    // items: [
    //   // {id: 0, name: 'Steak Dinner', calories: 1200},
    //   // {id: 1, name: 'Cookie', calories: 400},
    //   // {id: 2, name: 'Eggs', calories: 300}
    // ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

     // Back button event
     document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

     // Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      //Store in localStorage
      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click edit item
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

     // Get total calories
     const totalCalories = ItemCtrl.getTotalCalories();
     // Add total calories to UI
     UICtrl.showTotalCalories(totalCalories);

     // Update local storage
     StorageCtrl.updateItemStorage(updatedItem);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  // Delete button event
  const itemDeleteSubmit = function(e){
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(clientInformation);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
  }


  // Clear items event
  const clearAllItemsClick = function(){
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // Remove from UI
    UICtrl.removeItems();

    // Clear from local storage
    StorageCtrl.clearItemsFromStorage();

    // Hide UL
    UICtrl.hideList();
    
  }

  // Public methods
  return {
    init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize App
App.init();



// 111  BABEL WEBPACK ENVIRONMENT

// set up the Webpack Babel environment



// 112 INTRO TO ESE5 MODULES




// 113 CREATE THE UI

// just create the UI in index.html




// 114 CREATE A FAKE REST API USING JSON SERVER


// 115 GET DISPLAY POST





// 116  ADD POSTS SHOW ALERT



// 117 POST EDIT STATE UPDATE 1



