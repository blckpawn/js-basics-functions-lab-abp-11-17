// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const distanceInBlocks = destination - 42;

      return `${distanceInBlocks} returns a distance in blocks.`;
    } 
}
distanceFromHqInBlocks(42, 43);
