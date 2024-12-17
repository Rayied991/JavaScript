//12 inch=1 feet

function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}
function inchToFeet2(inch){
    const feet=inch/12;
    const feetNumber=parseInt(feet);
    let mod=inch%12;
    return `${feetNumber} feet ${mod} inches`;
}
function feetTOInch(feet){
    const inch=feet*12;
    return inch;
}


//miles to km
function miletoKm(miles){
    const kilo=miles*1.60934;
    return kilo;
}
function kilotoMile(km){
    const miles=km/1.60934;
    // kilo*0.621371
    return miles;
}



const h=inchToFeet(75);
console.log(h);
const h2=inchToFeet2(75);
console.log(h2);
const mk=miletoKm(75);
console.log(h2);
const mk2=kilotoMile(75);
console.log(h2);