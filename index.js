// Code your solution in this file!
function distanceFromHqInBlocks (destination){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(destination - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet (location) {

    if(location > 42){
      return (location -42 ) * 264;

    }else
      return (42 - location ) * 264;

}
