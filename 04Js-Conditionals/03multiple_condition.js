const salary=21001;
const isBCS=true;
const height=78;
const hasCar=false;



//And
if(salary >20000 && height > 66){
    console.log("I am rich");
}
else{
    console.log("I am poor");
}

//OR
if(salary >25000 || height > 72){
    console.log("I am rich kid");
}
else{
    console.log("I am poor kid");
}

if(salary >25000 || height > 72 || isBCS ==true){
    console.log("I am rich kid-1");
}
else{
    console.log("I am poor kid-1");
}

if(salary >25000 && height > 72 && isBCS ==true){
    console.log("I am rich kid-2");
}
else{
    console.log("I am poor kid-2");
}


// -----------Complex Condition ------------------
if((salary > 250000 && hasCar == true) || isBCS == true){
    console.log("Accepted")

}
if((salary > 250000 || hasCar == true) && isBCS == true){
    console.log("Accepted")

}

