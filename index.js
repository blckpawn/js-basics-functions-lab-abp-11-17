// Code your solution in this file!
function distanceFromHqInBlocks (destination){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(destination - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet () {
  distanceFromHqInBlocks();

    const distanceInFeet = distanceFromHqInBlocks(0) * 264;

    return distanceInFeet;

}
