console.log("Hello!");
alert("Hello!");

/*js in other file helps->
-readability
-modular
-browser caching(loading time better)
*/

/*
Window object->
An open window in a browser. It is browser's object (not javascript's)
& is automatically created by browser.
It is a global object with lots of properties & methods.
*/
window.console.log("Hello2!");
console.dir(window.document);
console.dir(window.document.body);//access html 
console.dir(window.document.body.childNodes[1]);
console.log(window.document.body.childNodes[1]);
//Dynamic changes
document.body.childNodes[1].innerText ="abcd";
console.log(window.document.body);
console.log(window.document.head);

//console.log-> used to print
//console.dir->special object (document)-> prints properties and methods





