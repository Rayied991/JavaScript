///Truthy & Falsy
/**
 * Truthy
 * 1.true
 * 2.any number (+ve) or (-ve) will be truthy except 0
 * 3.any string will be truthy other than empty string[' '=truthy]
 * 4.'0' will be truthy
 * 5.'false' will be truthy
 * 6.any object will be truthy even if it has no properties/empty object
 * 7.any array will be truthy even if it has no elements /empty array
 * falsy
 * 1.false
 *2.0 =falsy
 3.empty string will be falsy('')
 4.undefined=falsy
 5.null=falsy
 */
// const x=4;
// const x={};
const x=[];
if(x){
    console.log("x is truthy")
}
else{
    console.log("x is falsy")
}

// const y='SRK';
// const y='0';
const y='false';
if(y){
    console.log("y is truthy")
}
else{
    console.log("y is falsy")
}
let z;
console.log(z)
if(z){
    console.log("z is truthy")
}
else{
    console.log("z is falsy")
}


//optional
//check falsy
let c='';
if(!c){
    console.log("c is falsy")
}

//check truthy
let d=0;
if(!d){
    console.log("d is truthy")
}

const z1={class:9}
if(!!z1){
    console.log("z1 is truthy")  
}