//Super keyword is used to call the constructor of its parent
// class to access parent's property and methods.

class Person{
    constructor(name){
       
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("Eat");
    }
 
}

class Engineer extends Person{
    
    constructor(name){
       //To invoke parent class constructor if not get an error
        // super(); // Parent=undefined
        super(name); 
        
       
    }
    work(){
        super.eat();
        console.log("Solve Problems!");
    }
}


let engObj= new Engineer("Rayied");

// child class /derived class 
// super important in inheritance 

