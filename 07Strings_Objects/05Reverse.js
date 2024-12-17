const sentence="I am learning web-dev";

//way-1
let rev='';
for(let letter of sentence){
    rev=letter+rev; 
}
console.log(rev);
console.log("way-2");
//way-2
for(let i=sentence.length-1;i>=0;i--){
    console.log(sentence[i]);
}

//way-3
console.log("way-3");
let reverse='';
for(let i=0;i<sentence.length;i++){
    const letter=sentence[i];
    reverse=letter+reverse;
}
console.log(reverse);


//way-4
console.log("Way-4");       
const reversed=sentence.split('').reverse().join('');
console.log(reversed);