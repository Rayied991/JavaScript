//Switch statement
//basis on single expression value match-> give output

const expr="Papayas";
switch(expr){
    case 'Oranges':
        console.log("Oranges are $0.59 a pound.");
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log("Papayas are $0.72 a pound.");
        break;
    default:
        console.log("Sorry we are off");
}