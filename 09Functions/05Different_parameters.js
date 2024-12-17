function evenSizedString(str){
    const len=str.length;
    console.log(str,len);
    if(len%2 === 0){
        return "Even size";
    }
    else{
        return "Odd size";
    }
}

function doubleOrTriple(number,doDouble){
    if(doDouble){
        const res=number*2;
        return res;
    }
    else{
        const res=number*3;
        return res;
    }
}

function numberElements(numbers){
    const len=numbers.length;
    return len;
}

function getAge(person){
    const age=person.age;
    return age;
}
const evenOdd=evenSizedString('Dhaka');
console.log(evenOdd);

const dT=doubleOrTriple(5,true);
const dT1=doubleOrTriple(5,false);
console.log(dT);
console.log(dT1);

const len=numberElements([12,45,78,45,121254,4,5]);
console.log(len);

const person={
    name: "Rasel",
    age:20
}
const Age=getAge(person);
console.log(Age);