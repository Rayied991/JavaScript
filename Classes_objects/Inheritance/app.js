// class Parent{
//     helllo(){
//         console.log("Hello");
//     }
// }

// class Child extends Parent{

// }
// let obj=new Child(); //Inherited from Parent

class Person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problems!");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}

let rakib= new Engineer();
console.log(rakib.work());


// parent class and child class has same function->in that
// case child class function get invoked.-> Method Overriding