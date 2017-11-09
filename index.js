// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const blocks = destination - headquarters;

      return ` ${blocks} returns a distance in blocks.`;
    }
}
distanceFromHqInBlocks(42, 43);
