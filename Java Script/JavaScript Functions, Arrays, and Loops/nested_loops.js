const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers)

let bosFollowers = ['bib','bnu','bhu','bgt']
let tiasFollowers =['tio','ghu','ghy','bhu','bgt']
let mutualFollower =[]
for(let i=0; i< bosFollowers.length; i ++){
  for(let j=0; j< tiasFollowers.length; j ++){
    if(bosFollowers[i]===tiasFollowers[j]){
      mutualFollower.push(tiasFollowers[j])
    }
  }
}
console.log(mutualFollower)

const cards = ['diamond', 'spade', 'heart', 'club'];
// Write your code below
let currentCard;
while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

let countString = '';
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Write your code below
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded)

for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
  
  console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write your code below
for(let i=0; i< rapperArray.length; i++){
console.log(rapperArray[i])
}
console.log("And if you don't know, now you know")

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// let i;
// for(let i=0; i< groceryList.length; i++){
//   console.log(groceryList[i])
// }

for(let i=0; i< groceryList.length; i++){
  if(groceryList[i]==='pasta'){
    break;
  }
  console.log(groceryList[i])
}
