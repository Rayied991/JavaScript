let fname=prompt("Enter your full name");
let len=fname.length;
let username=`@${fname.concat(len)}`;
console.log(username);