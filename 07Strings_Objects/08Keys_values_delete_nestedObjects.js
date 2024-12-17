const computer={
    brand: "hp",
    price: 35000,
    processor: "intel",
    ssd: "512gb"
}

//fetch keys
const keys=Object.keys(computer);
console.log(keys);

//fetch values
const values=Object.values(computer);
console.log(values);

//nesting
const college={
    name: "RBMS",
    class: ["XI","XII"],    
    events:["Science fair","21 February"],
    Unique:{
        color: "blue",
        result:{
            gpa: 5,
            merit: "top"    
        }
    } 
}

console.log(college.name);

//nesting
console.log(college.Unique);//object
console.log(college.Unique.color);
console.log(college.Unique.result);
console.log(college.Unique.result.merit);
college.Unique.result.merit="top most";
console.log(college.Unique.result.merit);   
console.log(college);  
college.events[0]="16 December";
console.log(college); 
college.events.push("Science fair 2022");
console.log(college);
delete college.class;
console.log(college);
