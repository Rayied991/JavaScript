// Ternary operator (shorthand of if else)=3 parts
//syntax

//condition?expression1:expression2
//condition is true then expression1 else expression2

const age=20;
// if(age>=18){
//     console.log("I can vote");
// }
// else{
//     console.log("I can't vote");
// }


//way-1
const out= age>=18?"I can vote":"I can't vote";
console.log(out);
//way-2
age<=10? console.log("I can vote") : console.log("I can't vote");


 let price=500;//can be changeable
const isLeader=false;

if(isLeader ===true){
    price=0;
}
else{
    price+=100;
}
console.log(price)

price= isLeader=== true ? 0 : price + 100;
console.log(price);



//advanced ternary
if(isLeader === true){
    if(price>1000){
        price=price/2;
    }
    else{
        price=0;
    }
}
else{
    price+=100;

}

price = isLeader === true? 
            price >1000 ?
                    price/2: 0
                        : price+100;

console.log(price);