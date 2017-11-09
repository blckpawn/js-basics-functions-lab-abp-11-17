// Code your solution in this file!
function distanceFromHqInBlocks (location){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(location - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet (location) {

    if(location > 42){
      return (location -42 ) * 264;

    }else
      return (42 - location ) * 264;

}

function distanceTravelledInFeet(start, end){
  const walker = Math.abs(start - end) * 264;

   return walker;


}
function calculatesFarePrice(start, destination)