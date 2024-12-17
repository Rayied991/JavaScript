console.log("Hello from JS");
console.log(document);
console.log(document.body);

//GetElementByTagName
//ArrayLikeObject/HtmlCollections
const liCollection=document.getElementsByTagName("li");
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

const allHeadings=document.getElementsByTagName("h1");
for(const h1 of allHeadings){
    console.log(h1.innerText);
}


//getElementById(single)
const fruitsTitle=document.getElementById("fruits-title");
//cannot iterate on single element
fruitsTitle.innerText="Fruits Changed by JS";




//search id which is not available-> return null


//getElementsByClassName(multiple)->return collection
const places=document.getElementsByClassName("important-places");
for(const place of places){
    console.log(place.innerText);
}


//search class which is not available-> return empty array/collection



//Query Selector all(related to css)[return static NodeList]
const SomeLi=document.querySelectorAll(".fruits-container li");
for(const li of SomeLi){
    console.log(li.innerText);

}
//NodeList vs HtmlCollection


//query Selector(only 1st)
const SomeLi2=document.querySelector(".fruits-container li");
console.log(SomeLi2.innerText);

//in js style attributes are written in camelCase

//style- all camelCase
const title=document.getElementById("fruits-title");
title.style.color="red";
title.style.backgroundColor="yellow";
title.style.textAlign="center";

//getAttribute
console.log(title.getAttribute("id"));
console.log(title.getAttribute("class"));

//classList[returns static DOMTokenList]
console.log(title.classList);
title.classList.remove("blue-bg");
console.log(title.classList);
title.classList.add("purple-bg");
console.log(title.classList);


//setAttribute[name of the attribute,value of the attribute]
title.setAttribute("title","tooltip set by JavaScript");
console.log(title.getAttribute("title"));


const fruits=document.getElementsByClassName("fruits-container")[0];

//innerHtml=show all tag and texts
console.log(fruits.innerHTML);
fruits.innerHTML="<h2>ABC DOM IS CHANGING </h2>";
console.log(fruits.innerHTML);

//innerText=show only texts