const person={
    name: "Rayied",
    age: 24,
    isMarried: false,
    profession: "student",
    salary: 0,
    // for gap u need to use quotes 
    'fav places': ['Bandarban','Coxs Bazar','Sylhet'],
}
//add a new property
person.address="Dhaka";
console.log(person);



console.log(person );
console.log(typeof(person));

//get object properties
//dot notation[way-1]
console.log(person.profession);
const age=person.age;
console.log(age);
console.log(typeof age);

//bracket notation[way-2]
console.log(person['age']);
const profession=person['profession'];  
console.log(profession);

//for this we cannot use dot notation
//use bracket notation  
console.log(person["fav places"])

//set properties
//dot notation
person.salary=30000;
console.log(person);    
console.log(person.salary);

//bracket notation
person['age']=44;
console.log(person);

person['fav places']=["Sylhet","Coxs Bazar","Bandarban"];
console.log(person);

const propName='profession';
person[propName]='teacher'; 
console.log(person[propName])
console.log(person);

      

