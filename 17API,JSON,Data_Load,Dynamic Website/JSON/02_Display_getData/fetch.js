// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //convert json promise. 
//       //.json not similar but close to json.parse()
//       .then(json => console.log(json))

function loadData(){
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)//return promise
    .then(response=>response.json())
    .then(json=>console.log(json))
}