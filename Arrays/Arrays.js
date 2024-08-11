//Arrays->Collection of items(linear)
//Approach-1
let marks_student1=97;
let marks_student2=82;
//approach not applicable-> if it becomes lengthy process for every value need variable
 

//Approach-2
let marksobj={
    stu1:97,
    stu2:82

};
// approach not applicable also

//same type information for storing we use Arrays
//in object -key matters
//in Array- position/index matters

let marks = [97,82,75,64,36];
console.log(marks);
//length is a property(does not work but give values is property)
console.log(marks.length);//5

let heroes =["Ironman", "Spider-man", "Batman", "Captain Marvel","Antman"];
console.log(heroes);
console.log("Type of Arrays:",typeof heroes);//object 


//Array indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[100]);
//DON'T EXIST in array index output comes undefined
console.log("change value");
marks[0]=66;
console.log(marks);

//Strings are immutable
//Arrays are mutable

//Looping over an array
for(i=0;i<heroes.length;i++){
    console.log("Heroes[",i,"] = ",heroes[i]);
}
console.log("For-of loop");
//for of
for(let el of heroes){
    console.log(el);
}

let countries=["Bd","Uk","USa","Ger"];
for (let country of  countries){
    console.log(country.toUpperCase());
}


