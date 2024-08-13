function numVowel( str){
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
       
    }
    return count;
}
let num= numVowel("aeiou");
console.log(num);


let arrow  = (str)=>{
    let count=0;
    for(let char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }

    }
    return  count;
};

let num2= arrow("aeiou");
console.log(num2);