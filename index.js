// Code your solution in this file!
function distanceFromHqInBlocks (destination){
    if ( destination >= 42){
      const distanceInBlocks = destination - 42;

      return math.abs(distanceInBlocks) ;
    }
}
distanceFromHqInBlocks(42, 43);
distanceFromHqInBlocks(32, 43);
