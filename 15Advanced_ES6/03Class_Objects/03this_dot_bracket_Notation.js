class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    activity(){
        this.sleep();
    }


}

const p1=new Person('sachin',23);
console.log(p1);
p1.sleep();
const p2=new Person('sakib',23);
console.log(p2);
p2.sleep();

//confusing
// const lazy=p1.sleep;
// lazy();

//dot,bracket notation
const person={
    name:'sachin',
    age:23,
    3:"third",
    'add-dress':'gazipur',

}
console.log(person['name']);
console.log(person.name);
const prop='name';
console.log(person[prop]);
console.log(person['3']);
console.log(person['add-dress']);