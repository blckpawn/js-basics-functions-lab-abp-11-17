// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const distance in blocks = destination - headquarters;

      return `${distance} returns a distance in blocks.`;
    }
}
distanceFromHqInBlocks(42, 43);
