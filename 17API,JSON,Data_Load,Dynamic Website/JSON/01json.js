const user={id:1,name:'John',job:'developer'};

console.log(user);

//JavaScript Object Notation(JSON)
// JSON is a text format that is used to store and transport data
// JSON is language independent
// JSON is data format
const stringified=JSON.stringify(user);
console.log(stringified);
/**
 * { id: 1, name: 'John', job: 'developer' }//JS object
{"id":1,"name":"John","job":"developer"}//string JSOn

 */
const shop={owner:'john',address:{
    street:'ulica',
    number:10,
    city:'New York',
    country:'USA',
    products:['laptop','phone'],
revenue:1000,
isOpen:true,
isNew:false}
};
console.log(shop);
const stringy=JSON.stringify(shop);
console.log(stringy);
// console.log(typeof stringy);//string 
const shopobj=JSON.parse(stringy);
console.log(shopobj);
console.log(typeof shopobj);