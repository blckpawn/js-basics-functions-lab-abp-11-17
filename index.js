// Code your solution in this file!
function distanceFromHqInBlocks (destination){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(destination - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet () {
  distanceFromHqInBlocks(destination);

    const distanceInFeet = distanceFromHqInBlocks(destination) * 264;

    return distanceInFeet;

}
