// creating object
// when we create a object there is a special property called prototype(special property,method)
//Prototypes -> Reference to an object
const student= {
    // states/property 
    fullName : "Rayied",
    marks: 94.4,
    // function/method inside a object 
    printMarks: function(){
        console.log("Marks = ",this.marks);//this.marks=> student.marks
    }

};
console.log(student.printMarks());

// by default/ build in methods come from prototype object 


const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
    // calcTax2 : function(){
    //     console.log("Tax rate is 10%");
    // },
};

const alif={
    salary: 50000,
    // change taxrate 
    calcTax(){
        console.log("Tax rate is 20%");
    }
    
};
// const alif2={
//     salary: 50000,
    
// };
// const alif3={
//     salary: 50000,
    
// };
// const alif4={
//     salary: 50000,
    
// };
//prototype-> reference to an object 
alif.__proto__=employee;//used to set a prototype of an object
// alif2.__proto__=employee;
// alif3.__proto__=employee;
// alif4.__proto__=employee;

console.log(alif.calcTax);

//if object & prototype has same method , object's method will be used.
