// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(typeof(document.title));
// console.log(typeof(document.URL));
// console.log(typeof(document.domain));
// console.log(typeof(document.head));

// document.title = 'Play with DOM'; 

// console.log(document.all);
// console.log(typeof(document.all));

// for(let element of document.all){
//     console.log(element);
// }

//getElementById

// document.getElementById('new-task');
// let headerElement=document.getElementById('header');
// headerElement.textContent='To Do Apps';
// headerElement.innerText='To-Do Apps';

//textContent: first letter upper case and rest lowercase: returns html text 
//innerText: all uppercase: exactly browser like
// console.log(headerElement.textContent);
// console.log(headerElement.innerText);
// console.log(headerElement.innerHTML);


// headerElement.style.fontSize='50px';
// let itemParent=document.getElementById('items');

//getElementsByClassName()
// let items=itemParent.getElementsByClassName('item');

// for(let i=0;i<items.length;i++){
//     items[i].style.color="red";
// }
//getElementsByTagName()
// let items2=document.getElementsByTagName('li');
// console.log(items2);

//instead of jquery 
//querySelector()
// let header2=document.querySelector(".header");
// console.log(header2);
// let task2=document.querySelector("#new-task");
// console.log(task2);

// let lastItem=document.querySelector(".item:nth-child(2)");
// lastItem.style.color="blue";

// console.log(lastItem);
//for class querySelector returns first match

//for returning multiple/all
//use querySelectorAll()



// let lastItems=document.querySelectorAll(".item:last-child");
// // lastItems.style.color="red";//throw error for querySelectorAll

// console.log(lastItems);

// for(let element of lastItems){
//     element.style.color="red";
// }


// let newL=document.querySelector("#items").querySelector(".item:nth-child(3)");
// newL.style.color="red";

//Parent-Child RElationship
// up to down
// const grandParent=document.querySelector('.todo-list');
// const parent=grandParent.children;
// const children=parent[1].children;

// console.log(children);
// // console.log(children[1]);

// //fetch grand to children
// const child=grandParent.querySelectorAll('.item');
// console.log(child);

// //down to up

// const c1=document.querySelector('.item');
// console.log(c1);

// // const Parent1=c1.parentElement;
// // console.log(Parent1);


// //closest is some like querySelector

// const grandTodo=c1.closest('.todo-list');//returns closest parent
// console.log(grandTodo);


// const ChildrenOne=document.querySelector('.item');

// console.log(ChildrenOne);
//fetch sibling
// const ChildrenTwo=document.querySelector('.item').nextElementSibling;
// ChildrenTwo.style.color="red";
// console.log(ChildrenTwo);


// //fetch children two to one
// const child1=ChildrenTwo.previousElementSibling;

// child1.style.color="violet";
// console.log(child1);


//Manipulation
//Creating an element
// const divElement=document.createElement('div');
// // console.log(divElement);
// divElement.className='red';

// //add id
// divElement.setAttribute('id','red');
// divElement.setAttribute('title','Red Div');

// //for adding at 1st
// const container=document.querySelector('.todo-list');
// // const h2Element=container.querySelector('h2');
// // container.insertBefore(divElement,h2Element); //what to insert, before who inserted


// //inserting ending
// const a=container.appendChild(divElement);
// // const b=container.append(divElement);
// const b=container.append(divElement,document.createElement('p'),'Hello World');
// //appendChild-> only works with html elements/node; it returns passed element;it only accept one argument if u give multiple arguments it will ignore rest only accept 1st one
// //append->  works with html elements/node and also can accept text;it do not return anything [undefined]. append can pass multiple arguments
// console.log(a);
// console.log(b);


//Dom events
const headerElement=document.querySelector('#header');
//single click event
// headerElement.addEventListener('click', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//double click event
// headerElement.addEventListener('dblclick', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse down event
// headerElement.addEventListener('mousedown', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse up event[mouse release]
// headerElement.addEventListener('mouseup', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse enter event
// headerElement.addEventListener('mouseenter', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse leave event
// headerElement.addEventListener('mouseleave', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse over event
// headerElement.addEventListener('mouseover', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//mouse out event
// headerElement.addEventListener('mouseout', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
// headerElement.addEventListener('mousemove', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });

const inputElement=document.querySelector('input[type="text"]');

//keyboard events
//keydown
// inputElement.addEventListener('keydown', (event)=>{
//     console.log(typeof event);
//     console.log(event.target.value);
// });
//keyup
// inputElement.addEventListener('keyup', (event)=>{
//     console.log(typeof event);
//     console.log(event.target.value);
// });
//keyPress
// inputElement.addEventListener('keypress', (event)=>{
//     console.log(typeof event);
//     console.log(event.target.value);
// });
//focus
// inputElement.addEventListener('focus', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//blur
// inputElement.addEventListener('blur', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//cut
// inputElement.addEventListener('cut', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//paste
// inputElement.addEventListener('paste', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });
//input
// inputElement.addEventListener('input', (event)=>{
//     console.log(typeof event);
//     console.log(event.target);
// });







//Some mouse events differences
// const mouseElement=document.querySelector('.mouse');
//mouseenter vs mouseover
// mouseElement.addEventListener('mouseenter', (event)=>{//working on parent element
//     console.log(typeof event);
//     console.log(event.target);
    
// })
// mouseElement.addEventListener('mouseover', (event)=>{//working on parent-child both element
//     console.log(typeof event);
//     console.log(event.target);
    
// })

//form related events
const formElement=document.querySelector('form');

//submit
formElement.addEventListener('submit', (event)=>{
    event.preventDefault();//prevent from form reloading
    console.log(event);
    console.log(typeof event);
    console.log(event.target);
})

//input
inputElement.addEventListener('keydown', (event)=>{
    console.log(event);
    console.log(typeof event);
    console.log(event.target.value);
})



