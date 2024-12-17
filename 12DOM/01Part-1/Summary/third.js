const main=document.getElementById("main-container");

const section=document.createElement("section");
section.innerHTML=`
<h1>My Dynamic Section</h1>
<p>Extra text </p>
<ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
    <li>list item 4</li>
</ul>
`;

main.appendChild(section);
