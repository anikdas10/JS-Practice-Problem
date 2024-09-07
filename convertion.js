function inchToFeet(inch){
const feet = inch/12;
const feetnumber = parseInt(feet);
const feetremaining = inch%12;

return feetnumber + " ft " + feetremaining  + ' inch';
}


console.log(inchToFeet(68))