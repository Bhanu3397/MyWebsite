// The for loop syntax looks like this:
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.
for (let count=5; count < 11;count ++){
  console.log(count)
}
// Looping in Reverse:-
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let count = 3; count >=0; count --){console.log(count)}
// Looping through Arrays:-
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit '+vacationSpots[i]);
}
for(val in vacationSpots){
    console.log(`I love to go ${vacationSpots[val]}`)}