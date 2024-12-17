const persons=["Akib","Rakib","Nakib","Sakib","Arif","anis","Anis"];

const sortedPersons=persons.sort();
console.log(sortedPersons);

// sort->
const numbers=[4,7,12,8,43,6,1];
// Ascending(smaller to larger)
// Descending( larger to smaller )

// const numbers_asc=numbers.sort();# not sorting perfectly
// const numbers_asc=numbers.sort(function(a,b){
//     return a-b;
// });
// const numbers_dsc=numbers.sort(function(a,b){
//     return b-a;
// });

const numbers_asc=[...numbers].sort(function(a,b){
    return a-b;
});
const numbers_dsc=[...numbers].sort(function(a,b){
    return b-a;
});

//these will be a copy of array  because of [...numbers]
console.log(numbers_asc);
console.log(numbers_dsc);