// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const block = '${destination} - ${headquarters} + 1';

      return 'You have traveled ${block} blocks.';
    }
}
distanceFromHqInBlocks(43, 43);
