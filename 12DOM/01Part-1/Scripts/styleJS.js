const sections=document.querySelectorAll("section");

for(const section of sections){
    section.style.border="2px solid steelblue";
    section.style.marginBottom="5px ";
    section.style.borderRadius="15px ";
    section.style.paddingLeft="7px ";
    section.style.backgroundColor="lightgray ";
}

// const placesContainer = document.querySelector("#places-container");
// placesContainer.style.backgroundColor="yellow";

const placesContainer=document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");

//childNodes[immediate child]
console.log(placesContainer.childNodes);
console.log(placesContainer.childNodes[1]);
console.log(placesContainer.childNodes[3]);
console.log(placesContainer.childNodes[3].childNodes);
console.log(placesContainer.childNodes[3].childNodes[5]);
//nextSibling
console.log(placesContainer.childNodes[3].childNodes[5].nextSibling);
//FirstChild
console.log(placesContainer.firstChild);
//lastChild
console.log(placesContainer.lastChild);

const placesUl=document.querySelector("#places-container ul");
//createElement
const newLi=document.createElement('li');
newLi.innerText="Brand new place to go";
//appendChild
placesUl.appendChild(newLi);

const li2=document.createElement('li');
li2.innerText="Brand new place to go 2";
placesUl.appendChild(li2);

//find parentNodes
console.log(placesUl.parentNode);
console.log(placesUl.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode.parentNode.parentNode);
