console.log(5)
console.log('hello'.length)
console.log('Teaching the world how to code'.length)
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp+=5
powerLevel-=100
multiplyMe*=11
quarterMe /=4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++
lostDollar--
console.log(gainedDollar++)
console.log(lostDollar--)

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable)
newVariable=1
console.log(typeof newVariable)

/*Dog Years
Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/

let myAge=5
let earlyYears=2
earlyYears*=10.5//multplication
let laterYears= myAge-=2
laterYears*=4
console.log(`${earlyYears},${laterYears}`)
var myAgeInDogYears = earlyYears+laterYears
const myName= 'Leela'.toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

//Truthy
let wordCount = 8;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//Falsy
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = 'marker'; //If marker is not present the default value takes over the writingUtensil variable
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);

//if else if else
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} 
else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
}
else if(season==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

//Switch
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.')
    break;
}

let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);
