//access
let heading = document.getElementById("heading");//h1 value return
console.log(heading);
console.dir(heading);
let heading4 = document.getElementById("heading1");//h1 value return
console.log(heading);//empty
console.dir(heading);

let heading2=document.getElementsByClassName("heading2");//returns html collections->similar to array
console.log(heading2);
console.dir(heading2);

let heading3=document.getElementsByClassName("heading");//empty because heading is an id
console.log(heading3);
console.dir(heading3);

let paras=document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

//better approach for accessing->Query selector->returns nodeList
let firstElement=document.querySelector("p");//we can access using id,class,tag
///returns first element
console.log(firstElement);
console.dir(firstElement);

let allElements=document.querySelectorAll("p");//we can access using id,class,tag
//returns a nodeList(all elements)
console.log(allElements);
console.dir(allElements);


//class access using querySelector
let c1=document.querySelector(".heading");//we always use .(dot) while writing class
console.dir(c1);
let c2=document.querySelector(".heading2");
console.dir(c2);

//id access using querySelector
let id=document.querySelector("#btn");//we always use # (hash) while writing class
console.dir(id);

//firstchild,lastchild property
console.log("firstChild & lastChild");
let first=document.body.firstChild;
console.dir(first);
// console.log(first);
let last=document.body.lastChild;
console.dir(last);
// console.log(last);

let access= document.querySelector("div").children;
console.dir(access);
//we use these things for navigation-firstchild,lastchild,children



//Value set,get,update
//1.tagname property
let tName=id.tagName;
console.log(tName);//Button tag

let searchPara=firstElement.tagName;
console.log(searchPara);



