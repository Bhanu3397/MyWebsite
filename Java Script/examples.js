/*Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'*/
/*const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}*/
// As a function declaration:
function lifePhase (age) {
    if (age < 0 || age > 140) {
       return 'This is not a valid age'
   } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
       return 'teen'
    } else if (age < 65) {
       return 'adult'
    } else {
        return 'senior citizen'
    }  
}
console.log(lifePhase(5)) 
console.log(lifePhase(0)) 

/*Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’
//as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
*/
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Write your function here:
function reportingForDuty(rank,lastName){
    return `${rank} ${lastName} reporting for duty!`
  }
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1)
      let die2 = Math.floor(Math.random() * 6 + 1)
      return die1 + die2
  }
console.log(rollTheDice())


const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
/*
// As a function declaration: 
function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
	 default:
		return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

const calculateWeight = (earthWeight, planet) => {
    if (planet === 'jupiter'){
      return earthWeight * 2.36
    } else if (planet === 'mercury'){
      return earthWeight * 0.378
    } else if (planet === 'venus'){
      return earthWeight  * 0.907
    } else if (planet === 'mars'){
      return earthWeight  * 0.377;
    } else if (planet === 'saturn'){
      return earthWeight  * 0.916;
    } else {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }  
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(calculateWeight(100, 'er')) // Should print 236
*/
console.log(calculateWeight(100, 'Jupiter'))

// truthyOrFalsy
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}

/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

const numImaginaryFriends = totalFriends => Math.round(totalFriends * .33)
/*
// As a function declaration:
    function numImaginaryFriends(totalFriends) {
    return Math.round(totalFriends * .33)
}
*/
console.log(numImaginaryFriends(18))

// Write your function here:
function sillySentence(adj,verb,noun){
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`
  }
  // Uncomment the line below when you're ready to try out your function
  console.log(sillySentence('excited', 'love', 'functions')) 
  
/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }

    const whatRelation = percentSharedDNA => {
        if (percentSharedDNA === 100) {
            return 'You are likely identical twins.'
        }
        if (percentSharedDNA > 34) {
            return 'You are likely parent and child or full siblings.'
        }
        if (percentSharedDNA > 13) {
            return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
        }
        if (percentSharedDNA > 5) {
            return 'You are likely 1st cousins.'
        }
        if (percentSharedDNA > 2) {
            return 'You are likely 2nd cousins.'
        }
        if (percentSharedDNA > 0) {
            return 'You are likely 3rd cousins'
        }
        return 'You are likely not related.'
    }
    console.log(whatRelation(34))
    // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    console.log(whatRelation(3))
    // Should print 'You are likely 2nd cousins.'
    
    const tipCalculator = (quality, total) => {
        switch (quality) {
            case 'bad':
                return total * .05;
            case 'ok':
                return total * .15;
            case 'good':
                return total * .20;
            case 'excellent':
                return total * .30;
            default:
                return total * .18;
    
        }
    }
    /*
    // As a function declaration:
    function tipCalculator(quality, total) {
        switch (quality) {
            case 'bad':
                return total * .05;
            case 'ok':
                return total * .15;
            case 'good':
                return total * .20;
            case 'excellent':
                return total * .30;
            default:
                return total * .18;
    
        }
    }
    */
    console.log(tipCalculator('good', 100))

// Write your function here:
function toEmoticon(emmoji){
    switch(emmoji){
      case 'shrug':
        return '|_{"}_|';
        break;
      case 'smiley face':
        return ':)';
        break;
      case 'frowny face':
        return ':(';
        break;
      case 'winky face':
        return ';)';
        break;
      case 'heart':
        return '<3';
        break;
      default:
        return '|_(* ~ *)_|'
    }
  }
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  