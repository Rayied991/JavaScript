function greetings(greetingHandler,name){
   greetingHandler(name);//callback function
}
const name='rahul';
const num=45;
const numbers=[1,2,3];
const laptop={name:'hp',brand:'hp',price:50000,ram:8};

function greetingHandler(name){
    console.log("Good Morning ",name);
}
// greetings(laptop);
function greetNight(name){
    console.log("Good night",name);
}

function greetEvening(name){
    console.log("Good Evening",name);

}
greetings(greetingHandler,'Tom Cruise');
greetings(greetingHandler,'Tom Hanks');
greetings(greetingHandler,'Tom Brady');
greetings(greetEvening,'Miles Morales');
greetings(greetEvening,'Tom Holland');
greetings(greetNight,'Russel');

function submitHandler(){
    console.log('Submitted');
}
document.getElementById('btn-submit').addEventListener('click',submitHandler);