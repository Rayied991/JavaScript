const mobile={
    brand: "Samsung",   
    price:25000,
    color: "black",
    camera: "12MP",
    isNew: true
}
//loop an object->for-in
for(const prop in mobile){
    console.log(prop,": ",mobile[prop]);
 
}
//for of:array
//for in:object

const keys=Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,": ",mobile[key]);
}

//object declare(another way)
// way-1
const pen={brand:'econo',price:10,color:'black'}
// wway-2 
const pencil=new Object();
console.log(pencil); 
// way-3 
const rubber=Object.create({});
console.log(rubber);   

// way-4 ->using new keyword

