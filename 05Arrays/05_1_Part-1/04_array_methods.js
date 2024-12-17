const friends=["balam","kamal","sakib","Johir"];

console.log(friends.includes("balam"));
console.log(friends.includes("abc"));

if(friends.includes("balam")){
    console.log("Yes");
}
else{
    console.log("No");
}


console.log(friends.indexOf("Johir"));
console.log(friends.indexOf("acc"));

const nums=[];
const num=12;
const foods=["pizza","burger","noodles"];
console.log(Array.isArray(nums));
console.log(Array.isArray(foods));
console.log(Array.isArray(num)); 
console.log(Array.isArray('[]')); 


//join

const realFriend=[ 'Rahim', 'karim', 'sakib' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('--'));