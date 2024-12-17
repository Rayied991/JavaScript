function isLeapYear(year) {
    // year/4->not 100% accurate
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isLeapYearFull(year){
    if(year % 4 ===0 && year % 100 !==0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}

//those years that is not divisible     by 100 if the year is divisyble 4 :isLeapYear.
const year=2052;
const result=isLeapYear(year);
console.log(result);
const res=isLeapYearFull(year);
console.log(`Is the year ${year} a leap year? ${res}`);

const isleap1=isLeapYearFull(2100);
const isleap2=isLeapYearFull(2400);
const isleap3=isLeapYearFull(1900);

console.log(isleap1,isleap2,isleap3);   