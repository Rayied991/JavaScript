const glass={
    name:"glass",
    color:"golden",
    price:12,
    isCleaned:true,
};
//keys:all property name
console.log(glass);
const keys=Object.keys(glass);//return keys
console.log(keys);

//values:all property value
const values=Object.values(glass);
console.log(values);

for(const element in glass){
    console.log(element," : ",glass[element]);//way-1

}
//entries:returns array of arrays
const pair=Object.entries(glass);
console.log(pair);

//Array of arrays:
/**
 * 2D Array
 * [
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]
 */

//removal
//way-1
delete glass.isCleaned;
console.log(glass);

//way-2
const {color, ...shortGlass}=glass;
console.log(color);
console.log(shortGlass);


//freeze(no change value/no delete access)
// glass.source="Made in BD";
// Object.freeze(glass);
// glass.currency="TK";
// delete glass.name;
// console.log(glass);
//seal->same as freeze just allow modification
glass.source="Made in BD";
Object.seal(glass);
glass.currency="TK";
glass.price=7200;
console.log(glass);