/*In programming, we often use code to perform a specific task multiple times
Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again.
We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

Function Declarations:-In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration
Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier.
Here function is a keyword and getReminder is a identifier and { within this is a function body} */
function getReminder(){
  console.log('Water the plants')
}
function greetInSpanish(){
  console.log('Buenas Tardes.')
}
greetInSpanish()
getReminder()

/*Parameters and Arguments:-
some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. 
Parameters allow functions to accept input(s) and perform a task using the input(s). 
We use parameters as placeholders for information that will be passed to the function when it is called.
When calling a function that has parameters, we specify the values in the parentheses that follow the function name. 
The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.
*/
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole')
/*
Default Parameters:-
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
*/
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList()
/*
Return:-When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.
*/
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
/*
When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed.
*/
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
//If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

function monitorCount(rows,columns){
  return rows * columns
}
const numOfMonitors = monitorCount(4,5)
console.log(numOfMonitors);

/*
Helper Functions:-
We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions
Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
*/
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
// Here two functions taking same parameters 
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows,columns){
  return monitorCount(rows, columns) *200
}
const totalCost = costOfMonitors(5,4)
console.log(totalCost)
/*
Function Expressions:- Another way to define a function is to use a function expression.
To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. 
A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
*/
const plantNeedsWater = function plantNeedsWater(day){
  if(day === 'Wednesday'){
    return true}
  else{
    return false
  }
};
console.log(plantNeedsWater('Tuesday'))
/*
Arrow Functions:-ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
Arrow functions remove the need to type out the keyword function every time you need to create a function.
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
*/
//Arrow function 
const NeedsWater = (day) => { 
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(NeedsWater('Wednesday'))
/*
Concise Body Arrow Functions:-JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. 
*/
/*
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
}; 
*/
//above function can be refacterd like this
//const plantNeedsWater = day => day === 'Wednesday' ? true : false;
/*
const greaterThanFive = (num) => {
  return num > 5 ? true : false;
}; */
const greaterThanFive = num =>  num > 5 ? true : false;
console.log(greaterThanFive(4)) //False
console.log(greaterThanFive(6)) //True

//Define an anonymous function which does not have any parameters.
let print = function () {
  console.log('Antonov is the largest aircraft to date.');  
}
console.log(print)
//Complete the arrow function in the code block. It takes 2 numbers and returns the sum
const add = (a, b) => a + b;
console.log(add(2, 4)); // 6