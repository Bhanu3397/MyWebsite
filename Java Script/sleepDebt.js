//https://www.youtube.com/watch?v=48ko-s_ePbc&feature=emb_title
const getSleepHours=day=>{
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 5;
      case 'wednesday':
        return 4;
      case 'thursday':
        return 7;
      case 'friday':
        return 9;
      case 'saturday':
        return 8;    
      case 'sunday':
        return 8;   
    }
  };
  //console.log(getSleepHours('Tuesday'))
  //Implicit return
  const getActualSleepHours = ()=>
    getSleepHours('Monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('saturday')+getSleepHours('sunday');
  //No parameters for getIdealSleepHours
  const getIdealSleepHours=() =>{
    const idealHours=7;
    return idealHours * 7;
  };
  /*console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56*/
  
  const calculateSleepDebt =()=>{
    actualSleppHours=getActualSleepHours();
    idealSleepHours=getIdealSleepHours();
    if (actualSleppHours===idealSleepHours){
      console.log('You got perfect amount of sleep')} else if (actualSleppHours> idealSleepHours){
        console.log('You slept more than usual')}
        else{
          console.log('You need to sleep atleast: '+idealSleepHours)
    }
  };
  calculateSleepDebt()