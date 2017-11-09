// Code your solution in this file!
function distanceFromHqInBlocks(location){

      const headquarters = 42;

      if( location > headquarters){
        return (location - headquarters);
      }else{
        return (headquarters - location);
      }

}

function distanceFromHqInFeet (location) {

    if(location > 42){
      return (location -42 ) * 264;

    }else
      return (42 - location ) * 264;

}

function distanceTravelledInFeet(start, end){
  if (start < end) {
      return (end - start) * 264;
    } else {
      return (start - end) * 264;
    }


}
function calculatesFarePrice() {
   distanceTravelledInFeet();
   
  if (distanceTravelledInFeet() <400) {
    return 0;
  } else {
  if (distanceTravelledInFeet()  >400 && distanceTravelledInFeet()  <2000) {
    return distanceTravelledInFeet() * 0.02;
  } else {
  if (distanceTravelledInFeet() >2000 && distanceTravelledInFeet() <2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
  }
  }
  }
