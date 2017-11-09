// Code your solution in this file!
function distanceFromHqInBlocks (headquarters, destination){
    if ( destination >= headquarters){
      const block = '${destination} - ${headquarters}';

      return 'You have traveled ${block} blocks.';
    }
}
distanceFromHqInBlocks(42, 43);
