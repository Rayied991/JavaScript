//data access
const data=[{
    id:1,
    name:'sachin',
    age:23,
    address: "Gazipur"
}];
console.log(data);
// console.log(data.address);//undefined
console.log(data[0].address);

const products={
    count:5000,
    data:[{id:1,name:"lenovo laptop",price:65000},
    {id:2,name:"Macbook",price:165000},
    ]
}

//second product price
console.log(products.data[1].price);

const user={
    id:5601,
    name:"sachin",
    address:{
        city:"gazipur",
        street:{
            first:"54/1 North",
            second:"Gulshan",
            third:"road"
        },
        city:"Dhaka"
    }
}

console.log(user.address.street.second);

const user2={
    id:5002,
    name:"samiul",
    address:{
        city:"chittagong",
        country:"Bangladesh"
    }
}

//optional chaining
console.log(user.address.street?.second);
console.log(user2.address.street?.second);//undefined
//if street is not present then it will give undefined