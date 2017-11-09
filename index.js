// Code your solution in this file!
function distanceFromHqInBlocks (destination){

      const headquarters = 42;

      const distanceInBlocks = Math.abs(destination - headquarters);

      return distanceInBlocks ;

}

function distanceFromHqInFeet (location) {

    if(location > 42){
      return (location -42 ) * 264;

    }else
      return (42 - location ) * 264;

}

function distanceTravelledInFeet(start, end){
  const walker = Math.abs(start - end) * 264;

   function calculatesFarePrice(){

      if(walker <= 400){
        return "The trip is free"
      }else if(walker >=401 || <=2000){
      const total = walker * .02
        return total;
      }else if(walker >2000 || <2500){
        total = 25;
        return total;
      }else if(walker >2500){
        return "The distance is too far."
      }
   }

   
}




