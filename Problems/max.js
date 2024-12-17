const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log("disha will get the rewards");
}
else {
    console.log("salman will get the rewards");
}

//inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}


const max = getMax(disha, salman);
console.log(`Max of ${disha} and ${salman} is ${max}`);
const max1 = getMax(56,80);
console.log(`Max of 56 and 80is ${max}`);

//3 number max
const jim=56;
const kim=89;
const tom=68;

if(jim>kim && jim>tom){
    console.log("jim will get the rewards");
}
else if(kim>jim && kim>tom){
    console.log("kim will get the rewards");
}
else{
    console.log("tom will get the rewards");
}

function maxThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const max4=maxThree(jim,kim,tom);
console.log(max4);
const maxim=Math.max(22,33,44,55,66,77,11,22,99,-99);
console.log(maxim);