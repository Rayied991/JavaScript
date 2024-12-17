/**
 * Multilevel Condition
 * 
 */
const price=7000;

if(price>=5000){
    const discount=price * (10/100);
    console.log("Discount price:",discount);
    
    const payAmount=price - discount;
    console.log("Pay amount:",payAmount);
}
else if(price> 2500){
    const discount=price * (5/100);
    console.log("Discount price:",discount);
    
    const payAmount=price - discount;
    console.log("Pay amount:",payAmount);


}
else{
    console.log(price);
}



const age = 65;
const p2=500;
if (age < 12){
    console.log("You can eat for free");
}
else if (age >=60){
    const discount=p2 * (50/100);
    console.log("Discount price:",discount);
    
    const payAmount=p2 - discount;
    console.log("Pay amount:",payAmount);


}
else if(age>=50){
    const discount=p2 * (25/100);
    console.log("Discount price:",discount);
    
    const payAmount=p2 - discount;
    console.log("Pay amount:",payAmount);

}
else if(age>=40){
    const discount=p2 * (10/100);
    console.log("Discount price:",discount);
    
    const payAmount=p2 - discount;
    console.log("Pay amount:",payAmount);

}
else{
    console.log(p2);
}