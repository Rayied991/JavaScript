console.log(5 > 10);//false
 console.log(5 < 10);//true
 console.log(5 == 10);//false
 console.log(10 == 10);//true
 console.log(10 >= 10);//true
 console.log(15 >= 10);//true
 console.log(5 >= 10);//false
 console.log(5 <= 10);//true
 console.log(10 <= 10);//true
 console.log(100 <= 10);//false

 console.log(10 == 10);//true
 console.log(10 == 10.1);//false
 
//  ----------------------------------------
var orangePrice=100;
var applePrice=250;
console.log(orangePrice > applePrice);//false
console.log(orangePrice < applePrice);//true


/*special comparison 
    1. == : it checks only value don't check the type
    2. === : it check value and also type
    3. != : it checks only value don't check the type
    4. !== : it check value and also type
*/

console.log( 10 == '10');//true
console.log( 10 === '10');//false



//-------------------------
console.log(10 != '10');//false

console.log(10 !== '10');//false
console.log(10 !== '101');//true
console.log(10 != '101');//true