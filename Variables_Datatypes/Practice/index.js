//Create a const object called product to store infos .
const product = {
    id: 2,
    name: "pen",
    price: 1.50,
    stock: 100,
    isAvailable: true,
    rating: 4.5,
    deal: null,
    offer: undefined,
    extra: "123"


};
console.log(product);
console.log(product.stock+1);
console.log(product.extra+1);
console.log(product.name+1);


//create a const object called profile to store infos.

const profile = {
    username:"Tony Stark",
    posts: 100,
    followers: 1000000,
    following: 10,
    email: "tony@starkindustries.com",
    isVerified: true,
    bio: "I am Iron Man."

};
console.log(profile);
console.log(typeof(profile["username"]));