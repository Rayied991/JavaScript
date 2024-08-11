//String Methods-> build in functions to manipulate strings

let str= "Hello World";
//toUpperCase Method
str.toUpperCase();//it never changes original value instead returns new value->
// Because strings are immutable 
console.log(str);
let upper=str.toUpperCase();
console.log(str);
console.log(upper);
//but if we assign to the old variable then it will change
str=str.toUpperCase();
console.log(str,"original");

//toLowerCase Method
lower=str.toLowerCase();
console.log(lower);

//trim method->removes whitespace(in start and end)
let t= "    Hello   World   ";
console.log(t.trim());

//Slice Method-> returns part of a string
//ending value= non-inclusive
let s1="abcdefg";
console.log(s1.slice(2,5));//start,end
console.log(s1.slice(3));//start
console.log(s1.slice());

//Concat Method->join 2 strings
let s2="hijklmno";
console.log(s1.concat(s2));//joins s1 with s2
console.log(s2.concat(s1));//joins s2 with s1

let res= s1 + s2;
console.log(res);//generally without method to concat


//Replace method -> search value in string

let ex ="hello";
console.log(ex.replace("lo","p"));///replace-> it will replace 1 time at first when the search value is found
console.log(ex.replaceAll("lo","p"));///replaceAll-> it will replace every  time at  when the search value is found

console.log(ex);


// CharAt method -> find any character in a specific index
let str2="IloveJS";
console.log(str2.charAt(0));//I
console.log(str2.charAt(2));//o


str2[0] = "S";
console.log(str2);//no change

str2=str2.replace("I","S");
console.log(str2);//change

