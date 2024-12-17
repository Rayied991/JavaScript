const products=[
    {id:1,name:'Lenovo',price:65000},
    {id:2,name:'Macbook',price:165000},
    {id:3,name:'Asus',price:85000},
    {id:4,name:'Dell',price:45000},
]

//similar
//has some properties,method
class Product{
    //special function
    constructor(name){
        this.name=name;
    }
    country='Bangladesh';
    Speak(talk){
        console.log(`Talking about ${talk}`);

    }

}

//objects
const lenovo=new Product("Lenovo");
console.log(lenovo);
lenovo.Speak('Lenovo');
lenovo.country='USA';
console.log(lenovo.country);


class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;

    }

    lecture(subject){
        console.log(`Lecturing ${subject}`);
    }

}

const Topon=new Teacher('Topon','Physics');
const rashid=new Teacher('Rashid','Math');
Topon.lecture('Physics');
rashid.lecture('Math');
console.log(Topon,rashid);


