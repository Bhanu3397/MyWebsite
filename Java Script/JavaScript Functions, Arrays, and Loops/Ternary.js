/*let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/
// Above code in short hand

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') :console.log("I don't love that!");

/*How would you properly refactor this code block using the ternary operator? 
if (walkSignal === 'Walk') {
    console.log('You may walk!'); 
} else {   
    console.log('Do not walk!');
}
Ans:-
walkSignal === 'Walk' ? console.log('You may walk!') : console.log('Do not walk!'); */

