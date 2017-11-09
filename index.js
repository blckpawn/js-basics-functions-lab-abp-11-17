// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const blocks = destination - headquarters;

      return `You have traveled ${blocks} blocks.`;
    }
}
distanceFromHqInBlocks(42, 43);
