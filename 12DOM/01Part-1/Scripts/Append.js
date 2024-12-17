// 1.Where to add 
const placesList=document.querySelector("#places-list");
// 2.What to be added 
const li=document.createElement("li");
li.innerText="Sylhet";
//3.Add the child
placesList.appendChild(li);


//1.Where to add
const mainContainer=document.getElementById("main-container");

//2.What to be added
const section=document.createElement("section");

const h1=document.createElement("h1");
h1.innerText="My Food List";
section.appendChild(h1);

const ul=document.createElement("ul");

const li1=document.createElement("li");
li1.innerText="Burger";
ul.appendChild(li1);

const li4=document.createElement("li");
li4.innerText="Pizza";
ul.appendChild(li4);

const li3=document.createElement("li");
li3.innerText="Sandwich";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


//another way
//set innerHtml directly
const sectionDress=document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Skirt</li>
    <li>Jeans</li>
</ul>`;
mainContainer.appendChild(sectionDress);