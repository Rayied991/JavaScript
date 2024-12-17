//ES6 Fat Arrow Function

//normal function
// function number(number){
//     return number;
// }

//convert to arrow function

//only single output
// let number=(a,b)=> a+b;

//multiple
// let number=(a,b)=>{
//     //other things
//     return a+b;
// }

//js- this keyword confusion resolve and easier for programmer


// console.log(number(10,5));

//problem ith this
// var javasript = {
//     name: 'Javascript',
//     libraries:['react','angular','vue'],
//     printLibraries: function(){//outer
//         // console.log(this);
//         // var self=this;//not convenient way to access
//         this.libraries.forEach(function(a){
//             //foreach is actually changing the outer this to something else
//             // console.log(this);
//             console.log(`${this.name} loves ${a}`);

//         });
//     }
// };

var javasript = {
    name: 'Javascript',
    libraries:['react','angular','vue'],
    printLibraries: function(){//outer
        //this={javascript}
        this.libraries.forEach((a)=>{
         
            console.log(`${this.name} loves ${a}`);

        });
    }
};
javasript.printLibraries();
//normal
function Person(name){
    this.name=name;
}
//Arrow
// var Person=(name)=>{
//Arrow
//error not a constructor

var sakib=new Person('sakib');

///if you use arrow function you cannot use new
