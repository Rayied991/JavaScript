// We will prefere classes when we need same template multiple objects
class ToyotaCar{
//Custom Constructor-> 
constructor(brand,milage){//at the time of initialization its been called automatically
    console.log("Creating new object");
    this.brand=brand;
    this.milage=milage;
}
    start(){
        console.log("Starting the car");
    }
    stop(){
        console.log("Stopping the car");
    }

    setBrand(brand){
        this.brand=brand;//property of class= pramater of function
        //this.brand= object;s property
    }



    
}
// object creation from a class 

// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus= new ToyotaCar();
// lexus.setBrand("lexus");
// console.log(typeof fortuner);
// console.log( fortuner);
// console.log(typeof lexus);


//Constructor part
let fortuner=new ToyotaCar("fortuner",10);//costructer
let lexus=new ToyotaCar("lexus",12);
console.log(fortuner);
console.log(lexus);


 //Constructor-> special method
 //automatically invoked by new we don't  need to call it
 //initializes object