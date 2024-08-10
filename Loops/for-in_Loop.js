//For-in loop
//We will use this loop for objects->it returns keys of objects
//iterator-> we get object keys 

let student={
    name:"Rahul",
    age: 20,
    cgpa: 3.66,
    isPass: true
};

for(let key in student){
    console.log("key = ",key, " Value = ",student[key]);
}