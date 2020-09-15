//https://www.youtube.com/watch?v=J-sbmeA0dfk&feature=emb_title
let userName='Jane';
 userName ? console.log(`Hello,${userName}`):console.log('Hello!')
let userQuestion ='Will I become a werewolf tonight?'
console.log(`The ${userName} asked ${userQuestion}?`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber
switch(eightBall){
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('Sorry no luck');
    break;
}
console.log(eightBall );

/*Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.
Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
*/

//https://www.youtube.com/watch?v=sSnUXjb_u-g&feature=emb_title
let raceNumber = Math.floor(Math.random() * 1000); 
let early=true; 
//let early = false
let age=28;

if (early && age>18){
  raceNumber +=1000
}
if (early && age>18){
  console.log(`Your race satrts at 9:30 am and your race number is: ${raceNumber}`)
}
else if(!early && age >18){
  console.log(`Your race satrts at 11:00 am and your race number is: ${raceNumber}`)
}
else if(age<18){
  console.log(`Your race satrts at 12:30 pm and your race number is: ${raceNumber}`)
}
else{
  console.log(`Register at front desk`)
}