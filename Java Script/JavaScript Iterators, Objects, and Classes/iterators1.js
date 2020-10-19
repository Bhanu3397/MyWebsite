// https://www.youtube.com/watch?v=0HtVAEgCvrE&feature=emb_title&ab_channel=Codecademy

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(fruit=>console.log('I want to eat a '+fruit))
//For loop 
for(i=0;i< fruits.length;i++){
    console.log('I want to eat a '+fruits[i])
}

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage)
console.log(secretMessage.join(''));
const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers)

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(shortWords)

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number=>{return number< 250})
console.log(smallNumbers)
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords=favoriteWords.filter(words=>{return words.length > 7})
console.log(longFavoriteWords)

const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen)
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal=animals.findIndex(animal=>{
  return animal==='elephant'
})
console.log(foundAnimal)
const startsWithS = animals.findIndex(animal=>{
  return animal[0] ==='s'
})
console.log(startsWithS)

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums) // Output: 17

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNums); // Output: 117

const newNumbers = [1, 3, 5, 7];
const newSum= newNumbers.reduce((accumulator,currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10)
console.log(newSum)


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => {
  return word.length < 6;
}));
// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});
console.log(interestingWords.every((word) => {return word.length > 5}));


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];
//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities)
// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)
// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums)
// Choose a method that will return a boolean value
nums.some(num => num < 0);