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

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.

console.log("Trim start:");
console.log(t.trimStart());
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log("Trim End:");
console.log(t.trimEnd());


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

// includes method->Testing if a string contains a substring
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//startswith method
if (browserType.startsWith("mo")) {
    console.log("Found mo!");
  } else {
    console.log("No zilla here!");
  }
//endswith method
  if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
  } else {
    console.log("No zilla here!");
  }


  //indexOf method->Finding the position of a substring in a string
  const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
console.log(tagline.indexOf("x")); // -1

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).
let text = "HELLO WORLD";
let char= text.charCodeAt(0);
console.log(char);//72

const lname = "W3Schools";
let letter = lname.at(2);
console.log(letter);

// substring()/substr() method-> is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().
//The difference is that the second parameter specifies the length of the extracted part.->substr()
let fruits = "Apple, Banana, Kiwi";
let part = fruits.substring(7, 13);
console.log(part);
let part2=fruits.substr(7,6);
console.log(part2);


// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

let text1 = "Hello world!";
let result = text1.repeat(5);
console.log(result);

//A string can be converted to an array with the split() method:


// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text2 = "Please locate where 'locate' occurs!";
let index = text2.lastIndexOf("locate");
console.log(index);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let index2 = text.lastIndexOf("John");
console.log(index2);

//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let t1 = "Please locate where 'locate' occurs!";
let se=t1.search("locate");
console.log(se);

//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text3 = "The rain in SPAIN stays mainly in the plain";
let match=text3.match("ain");
console.log(match);
const match2 = text3.matchAll("stays");
console.log(match2);