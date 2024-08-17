let divs=document.querySelector("div");
console.log(divs);
console.dir(divs);

//getAttribute->get the attribute value
let id=divs.getAttribute("id");//pass attribute
console.log(id);
console.dir(id);


let nameAttr=divs.getAttribute("name");
console.log(nameAttr);
console.dir(nameAttr);

let para= document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribute(attr,value)->set the attribute value
console.log(para.setAttribute("class","newClass"));

//changing style
let div=document.querySelector("div");

// div.style.visibility="hidden";
div.style.backgroundColor="green";
div.style.backgroundColor="purple";
div.style.fontSize="26px";
div.innerText="Hello";


//Insert elements->1.create 2.add
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
console.log(newBtn);
//creation done
//now showing on screen
//node.append(el);//adds at the end of node(inside)
let div2=document.querySelector("div");
div2.append(newBtn);
// Node.prepend(el)//adds the start of the node(inside)
let sum= document.createElement("summary");
sum.innerText="Cool!";
console.log(sum);

div2.prepend(sum);

//node.before(el)//adds before the node(outside)
let heading=document.createElement("h1");
heading.innerText="Heading-1";
console.log(heading);
div2.before(heading);

//node.after(el)//adds after the node(outside)
div2.after(heading);

//after paragraph
let pr=document.querySelector("p");

let heading2=document.createElement("h2");
heading2.innerText="Heading-2";
console.log(heading2);
pr.after(heading2);

let newHeading= document.createElement("h3");
newHeading.innerHTML="<i>I am new</i>";

document.querySelector("h4").prepend(newHeading);

//delete node->node.remove()

let nextHead=document.querySelector("h4");
nextHead.remove();


//firstChild()->
/*
The firstChild property returns the first child node of a node.

The firstChild property returns a node object.

The firstChild property is read-only.

The firstChild property is the same as childNodes[0].
*/
let fChild=document.querySelector("#para-01");
console.log(fChild.firstChild.nodeName);
console.log(fChild.firstChild.innerHTML);
console.log(fChild.firstChild.innerText);

//lastChild->
/*
The lastChild property returns the last child node of a node.
The lastChild property returns returns a node object.
The lastChild property is read-only

*/
let text = document.getElementById("myDIV");
console.log(text.lastChild.nodeName);
console.log(text.lastChild.innerHTML);
console.log(text.lastChild.innerText);

//child nodes->
/*
The childNodes property returns a collection (list) of an elements's child nodes.

The childNodes property returns a NodeList object.

The childNodes property is read-only.

childNodes[0] is the same as firstChild.
*/
let element = document.querySelector("#myDIV2");
let numb=element.childNodes.length;
console.log(numb);
document.querySelector("#demo").innerHTML=element;
console.log(element.childNodes[0]);
console.log(element.childNodes[1].style.backgroundColor = "yellow");
console.log(element.childNodes[1].innerText);
// console.log(element.childNodes[1].text);
//AppendChild->
//The appendChild() method appends a node (element) as the last child of an element.
let para02=document.querySelector("#myList");
let node=document.createElement("li");
let newNode=document.createTextNode("Water");
node.appendChild(newNode);
para02.appendChild(node);

// Remove child->The removeChild() method removes an element's child.
para02.removeChild(para02.firstElementChild);//Remove the first element from a list:
if (para02.hasChildNodes()) {//If a list has child nodes, remove the first (index 0):
    para02.removeChild(para02.children[0]);
  }
  while (para02.hasChildNodes()) {
    para02.removeChild(para02.firstChild);
  }





