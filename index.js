// Code your solution in this file!
function distanceFromHqInBlocks (destination){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(destination - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet (feet) {
  distanceFromHqInBlocks();

    const distanceInFeet = distanceFromHqInBlocks(distanceInBlocks) * feet;

    return distanceInFeet;

}
