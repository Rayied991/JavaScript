function rt(s){
    let len=s.length;
    let romans={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let sum=0;
    for(let i=0;i<len;i++){
        if(s[i]=="I" || s[i]=="V" || s[i]=="X"|| s[i]=="L" || s[i]=="C" || s[i]=="D" || s[i]=="M"){
            sum+=romans[s[i]];
    
        }
}
return sum;
}

let romantoInt=rt("MCMXCIV");

console.log(romantoInt)