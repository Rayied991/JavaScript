const products=[
    {id:1,name:'Lenovo',price:65000},
    {id:2,name:'Macbook',price:165000},
    {id:3,name:'Asus',price:85000},
    {id:4,name:'Dell',price:45000},
]

//map
const names=products.map(product=>product.name);
console.log(names)

const prices=products.map(prices=>prices.price);
console.log(prices)

//ForEach
products.forEach(p=>console.log(p.name));
products.forEach(p=>console.log(p.id));

//filter
const filter=products.filter(p=>p.price>50000);
console.log(filter)

//find
const find=products.find(p=>p.price<60000);
console.log(find)

//reduce
const red=products.reduce((p,c)=>p+c.price,0);
console.log(red)