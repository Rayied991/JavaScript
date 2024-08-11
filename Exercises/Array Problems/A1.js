let marks=[85,97,44,37,76,60];
let average=0;
let sum=0;
for(let vl of marks){
    sum+=vl;
}
average=sum/marks.length;
console.log("Sum:",sum);
console.log("Average:",average);

 let prices=[250,645,300,900,50];


//way-1
// for(let i=0;i<prices.length;i++){
//     prices[i]=prices[i]-(prices[i]*offer);
// }

//way-2
let i=0;
let offer=0.1;
for(let val of prices){
    // let offer=val / 10;
    // prices[i]=prices[i] - offer;
    prices[i] = prices[i]-(prices[i]*offer);
    console.log(`Value after offer = ${prices[i]}`);
    i++;
}
