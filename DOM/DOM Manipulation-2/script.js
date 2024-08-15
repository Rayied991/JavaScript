//innerText->returns the text content of the element and its children
//Important term->Parent,child,siblings(same level)
let mydiv=document.querySelector("div");
console.dir(mydiv);
console.dir(mydiv.innerText);

//innerHtml->returns the plain text or HTML contents in the element
console.dir(mydiv.innerHTML);
console.log(mydiv.innerHTML);

//innerText->only text
//innerHtml->html content+text


//set text
//changing ->dynamically in runtime
mydiv.innerText="abcd";//set new text
mydiv.innerHTML="<div>Inner html</div>";

let heading=document.querySelector("h1");
console.dir(heading);
heading.innerText="New heading";
heading.innerHTML="<i>New Heading</i>";

//textContent->returns textual content even for hidden elements.
console.dir(heading);
console.log(heading);
console.log(heading.innerText);
console.log(heading.textContent);//can see hidden elements

