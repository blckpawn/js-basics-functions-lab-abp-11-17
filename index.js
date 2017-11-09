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
  const walker = Math.abs(start - end) * 264;

   return walker;


}
function calculatesFarePrice(start, end){

  const total = start - end;

  if( total <400){
    return 0;
  } else if( total >=400 && total <=2000){
    return (total *.02);
  } else if ( total >2000 && <=2500){
    return (25);
  }else if (total >2500){
    return "cannot travel that far";
  }

}
