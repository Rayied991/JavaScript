//slice
const address="chayabithi";
const part=address.slice(2,5); //startIndex,endIndex(endIndex-1) 
//(2,5)=index 2 to 4
console.log(part);

//split
const sentence="My name is Rayied";
console.log(sentence.split()); 
console.log(sentence.split('')); 
console.log(sentence.split(' ')); 
console.log(sentence.split('a')); 

const friends='Rahim,karim,sakib';//separated by comma
const friendsStr=friends.split(',');
console.log(friendsStr);

